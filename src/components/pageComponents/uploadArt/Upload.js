import React, {useEffect, useState} from "react";
import {Button, Checkbox, DefaultTheme, Div, Icon, Label, Notification, Radiobox, ThemeProvider} from "react-atomize";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {setUser} from "../../../redux/actions/authActions";
import "firebase/storage";

import ImageUploader from "react-images-upload";
import '../../../styles/global.scss'
import useUploadItem from "../../../hooks/useUploadItem";


const theme = {
    ...DefaultTheme,
    grid: {
        ...DefaultTheme.grid,
        colCount: 12,
        gutterWidth: 2
    }

};

const categories = require("../../../assets/json/categories.json");



function MonthAsString(monthIndex) {
    const month = [];
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    return month[monthIndex];
}

function DayAsString(dayIndex) {
    var weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";

    return weekdays[dayIndex];
}


function Upload(props) {

    const {uploadProgress, uploadItemData} = useUploadItem()

    const [step, setSteps] = useState(0);
    const [errorDark, setErrorDark] = useState(false);
    const [error, setError] = useState("");
    const [preview, setPreview] = useState(true);
    const [itemData, setItemData] = useState({
        title: "",
        description: "",
        category: "Select Category",
        closingDate: "",
        closingTime: 12,
        state: "State",
        basePrice: 0,
        featuredImage: null,
        supportingImages: [],
    })

    const handleItemDataChanged = (dataType, value) => {
        setItemData(prevState => {
            return { ...prevState,[dataType]: value}
        })
    }

    const onDrop = (files, pics, type) => {
        let dataType
        let value = null

        console.log(files.length)
        if(type === 1) {
            dataType = "featuredImage"
            if(files.length > 0) {
                value = files[0]
            }
            handleItemDataChanged(dataType, value)
        }
        else {
            if(files.length > 3){
                setError("You can select only 4 Photos")
                setErrorDark(true)
            }else{
              
                dataType = "supportingImages"
                value = itemData.supportingImages.concat(files)
                handleItemDataChanged(dataType, value)
            }
        }

        
    };

    const categoryList = (
        <select
            className="upload-select"
            name="category"
            value={itemData.category}
            onChange={(e) => {
                handleItemDataChanged(e.target.name, e.target.value)
            }
            }>
            <option>Select Category</option>
            {categories.categories.map((name, index) => (
                <option className="upload-select">
                    {name.category}
                </option>
            ))}
        </select>
    );

    function GetDates(startDate, daysToAdd) {
        const aryDates = [];

        for (let i = 0; i <= daysToAdd; i++) {
            const currentDate = new Date();
            currentDate.setDate(startDate.getDate() + i);
            aryDates.push(currentDate);
        }

        return aryDates;
    }

    function dateToString(date) {
        return DayAsString(date.getDay()) + ", " + date.getDate() + " " + MonthAsString(date.getMonth()) + " " + date.getFullYear()
    }


    const closingDays = []
    const startDate = new Date();
    const aryDates = GetDates(startDate, 7);

    aryDates.map((dateObject, i) => {
        const dateString = dateToString(dateObject)
        closingDays.push(
            <Label
                align="center"
                textWeight="600"
                m={{b: "0.5rem", r: "2rem"}}
            >
                <Radiobox
                    onChange={() => {
                        handleItemDataChanged("closingDate", dateObject)
                    }}
                    name="date"
                />
                {dateString.split(', ')[1]}
            </Label>
        )
    })

    const stepOne = (<Div>
        Step {step + 1}
        <br/>
        <input
            type="text"
            className="upload-input"
            name="title"
            placeholder="Title (10-50 Chars)"
            value={itemData.title}
            onChange={(e) => {
                if (e.target.value.length < 50) {
                    handleItemDataChanged(e.target.name, e.target.value)
                }
            }}/>

        <textarea
            size="20"
            type="text"
            className="upload-input"
            name="description"
            placeholder="Description (50-400 Chars)"
            value={itemData.description}
            onChange={(e) => {
                if (e.target.value.length < 400) {
                    handleItemDataChanged(e.target.name, e.target.value)
                }
            }}/>

        {categoryList}

        {/* {stateList} */}

        <br/>
        <Button
            className="btn btn-primary"
            onClick={() => {
                if (step1Validation()) {
                    setSteps(1)
                }
            }}
        >
            Next
        </Button>
    </Div>)
    const stepTwo = (<Div className="mb-3">
        Step {step + 1}
        <Label
            fontFamily="primary"
            textColor="gray800">
            Closing Date
        </Label>

        <Div d="flex">
            {closingDays}
        </Div>

        <hr className="my-4"/>

        <Div d="flex">

            <Button
                onClick={() => setSteps(0)}
            >

                Back
            </Button>
            &emsp;
            <Button
                className="btn btn-primary"
                onClick={() => {
                    if (itemData.closingDate !== "") {
                        setSteps(2)
                    } else {
                        setError("Select a Closing Date")
                        setErrorDark(true)
                    }

                }}
            >
                Next
            </Button>
        </Div>
    </Div>)
    const stepThree = (<Div>

        Step {step + 1}
        <ImageUploader
            {...props}
            withIcon={true}
            onChange={(files, pics) => {
                onDrop(files, pics, 1)
            }}
            buttonText='Choose Featured image'
            singleImage="true"
            withPreview='true'
            imgExtension={[".jpg", ".gif", ".png", ".jpeg"]}
            maxFileSize={5242880}
        />


        <Div d="flex">

            <Button
                onClick={() => setSteps(1)}
            >

                Back
            </Button>

            <Button

                onClick={() => setSteps(3)}
            >

                Next
            </Button>
        </Div>
    </Div>)
    const stepFour = (<Div>
        Step {step + 1}

        <ImageUploader
            {...props}
            withIcon={true}
            onChange={(files, pics) => {
                onDrop(files, pics, 2)
            }}
            buttonText='Choose more images (Max 4)'
            withPreview={preview}
            imgExtension={[".jpg", ".gif", ".png", ".jpeg"]}
            maxFileSize={5242880}
        />


        <Div d="flex">
            <Button
                onClick={() => setSteps(2)}
            >

                Back
            </Button>
            &emsp;
            <Button
                className="btn btn-primary"
                onClick={() => setSteps(4)}
            >

                Next
            </Button>
        </Div>
    </Div>)

    const stepFive = (<Div>
        Step {step + 1}
        <input
            type="number"
            className="upload-input"
            placeholder="Price"
            name="basePrice"
            value={itemData.basePrice === 0? "" : itemData.basePrice}
            onChange={(e) => {
                handleItemDataChanged(e.target.name, Number(e.target.value.trim()) )
            }}
        />
        <Label align="center" textWeight="600" m={{b: "0.5rem"}}>
            <Checkbox
            />
            I Agree all the shit.
        </Label>
        <Div d="flex">
            <Button
                onClick={() => setSteps(3)}
            >Back</Button>&emsp;
            <Button
                className="btn btn-primary"
                onClick={() => {
                    (async () => {
                        try {
                            const resData = await uploadItemData(itemData)
                            console.log("upload data is :", resData)
                        }
                        catch (e) {
                            console.error("error while uploading :",e)
                        }

                    })();

                }}
            >

                Upload
            </Button>
        </Div>
    </Div>)

    const closetime = (
        <Div d="flex" className="mb-3">
            <Label
                align="center"
                textWeight="600"
                m={{b: "0.5rem", r: "2rem"}}
            >
                <Radiobox
                    onChange={() => handleItemDataChanged("closingTime", 12)}
                    checked={itemData.closingTime === 12}
                    name="count"
                />
                12AM
            </Label>
            <Label
                align="center"
                textWeight="600"
                m={{b: "0.5rem", r: "2rem"}}
            >
                <Radiobox
                    onChange={() => handleItemDataChanged("closingTime", 15)}
                    checked={itemData.closingTime === 15}
                    name="count"
                />
                3PM
            </Label>
            <Label
                align="center"
                textWeight="600"
                m={{b: "0.5rem", r: "2rem"}}
            >
                <Radiobox
                    onChange={() => handleItemDataChanged("closingTime", 18)}
                    checked={itemData.closingTime === 18}
                    name="count"
                />
                6PM
            </Label>
        </Div>
    );

    const errorNotification = (<Notification
        bg="danger100"
        textColor="danger800"
        isOpen={errorDark}
        onClose={() => setErrorDark(false)}
        prefix={
            <Icon
                name="CloseSolid"
                color="danger800"
                size="18px"
                m={{r: "0.5rem"}}
            />
        }
    >
        {error}
    </Notification>)


    function step1Validation() {
        if (itemData.title.length > 10) {
            if (itemData.description.length > 30) {
                if (itemData.state !== "Select State") {
                    if (itemData.category !== "Select Category") {
                        return true;
                    } else {

                        setError("Select Category")
                        setErrorDark(true)
                    }
                } else {
                    setError("Select State")
                    setErrorDark(true)
                }
            } else {
                setError("Description Must Contain More Than 30 Characters")
                setErrorDark(true)
            }
        } else {
            setError("Title Must Contain More Than 10 Characters")
            setErrorDark(true)
        }
        return false;
    }


    return (
        <ThemeProvider theme={theme}>
            <Icon
                name="Cross"
                pos="absolute"
                top="1rem"
                right="1rem"
                size="16px"
                cursor="pointer"
            />
            {errorNotification}
            {step === 0 ? stepOne : null}
            {step === 1 ? stepTwo : null}
            {step === 2 ? stepThree : null}
            {step === 3 ? stepFour : null}
            {step === 4 ? stepFive : null}
        </ThemeProvider>
    );
}

const mapStateToProps = (state) => {
    const {auth} = state

    /**
     * Use it as:
     * const user = props.auth.user
     * const error = props.auth.error
     */

    return {auth}
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        //all actions come here
        /**
         * props.setUser()
         * */
        setUser,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Upload)