import React, {useState} from "react";
import {
  ThemeProvider,
    Div,
    DefaultTheme,
    Button,
    Icon,
    Input,
    Label,
    Textarea,
    Checkbox,
    Dropdown, Anchor, Radiobox, Notification
} from "react-atomize";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {setUser} from "../../../redux/actions/authActions";
import { DropZone } from "../../molecules/dropZone/DropZone";
import "firebase/storage";

import ImageUploader from "react-images-upload";


import image from '../../../assets/images/hero_splash.jpg';
import '../../../styles/global.scss'


const theme = {
	...DefaultTheme,
	  grid: {
		  ...DefaultTheme.grid,
		colCount: 12,
		gutterWidth: 2
    }
   
    };

    const categories = require("../../../assets/json/categories.json");
    const states = require("../../../assets/json/statesDistrictIndia.json");


    // console.log("categories",categories)
    console.log("state",states.states)


    function GetDates(startDate, daysToAdd) {
        var aryDates = [];
    
        for (var i = 0; i <= daysToAdd; i++) {
            var currentDate = new Date();
            currentDate.setDate(startDate.getDate() + i);
            aryDates.push(DayAsString(currentDate.getDay()) + ", " + currentDate.getDate() + " " + MonthAsString(currentDate.getMonth()) + " " + currentDate.getFullYear());
        }
    
        return aryDates;
    }
    
    function MonthAsString(monthIndex) {
        var d = new Date();
        var month = new Array();
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
    
    


    // runUploadItemsApi()

    function getBase64(e) {
        // var file = e.target.files[0]
        // let reader = new FileReader()
        // reader.readAsDataURL(file)
        // console.log("File", file)
        // reader.onload = () => {
        //     const ref = firebase.storage().ref().child('some-child');
        //     ref.put(file).then((snapshot) => {
        //         console.log('Uploaded a blob or file!');
        //     });
        // };
        // reader.onerror = function (error) {
        //   console.log('Error: ', error);
        // }
      }
    
	
	function Upload(props) {

        // runUploadImageItemsApi({})
	    

        const [step, setSteps] = useState(0);
        const [title, setTitle] = useState('');
        const [caption, setCaption] = useState('');
        const [basePrice, setBasePrice] = useState(0);
        const [imageUrls, setImgUrls] = useState(null);
        const [featuredImageUrl, setFeaturedImageUrl] = useState(null);
        const [category, setCategory] = useState('Select Category')
        const [closingDate, setClosingDate] = useState('')
        const [closingTime, setClosingTime] = useState(12)
        const [state, setState] = useState('State')
        const [errorDark, setErrorDark] = useState(false);
        const [error,setError] = useState("");
        const [pictures, setPictures] = useState([]);
      

          const stateList = (
            <select 
                className="upload-select"
                value={state} 
                onChange={(e) => {
                    setState(e.target.value)
                    console.log("State", e.target.value)
                    }
                }>
                <option>Select State</option>
                {states.states.map((name, index) => (
                    <option className="upload-select">
                        {name.name}
                    </option>
            ))}
            </select>
        );

        const categoryList = (
            <select 
                className="upload-select"
                value={category} 
                onChange={(e) => {
                    setCategory(e.target.value)
                    console.log("Category", e.target.value)
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


        const closingDays = []
        const today = new Date();
        const date = new Date();
        date.setDate(date.getDate() + 1);

        const startDate = new Date();
        const aryDates = GetDates(startDate, 7);
        console.log(aryDates)

        aryDates.map((d,i) =>(
            closingDays.push(
                <Label
                    align="center"
                    textWeight="600"
                    m={{ b: "0.5rem", r: "2rem" }}
                >
                    <Radiobox
                    onChange={() => {
                        setClosingDate(d)
                        console.log(d)
                    }
                }
                    name="date"
                    />
                    {d.split(', ')[1]}
                </Label>
            )
        ))

        const stepOne = (<Div>
                            Step {step+1}
                            <br />
                            <input 
                                type="text" 
                                className="upload-input"  
                                placeholder="Title (10-50 Chars)" 
                                value={title} 
                                onChange={(e) => {
                                    if(e.target.value.length<50)
                                    {
                                        setTitle(e.target.value)
                                        console.log(e.target.value)
                                    }
                                    }}/>

                            <textarea 
                                size="20" 
                                type="text" 
                                className="upload-input"  
                                placeholder="Description (50-400 Chars)" 
                                value={caption} 
                                onChange={(e) => {
                                    if(e.target.value.length<400)
                                    {
                                        setCaption(e.target.value)
                                        console.log(e.target.value)
                                    }
                                    }}/>

                            {categoryList}
                            
                            {/* {stateList} */}

                            <br />
                            <Button
                            className="btn btn-primary"
                            onClick={()=>
                                {
                                    if(step1Validation()){
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

            <Div d="flex" >
                {closingDays}
            </Div>

            <hr className="my-4" />

            <Div d="flex" >
            
            <Button
                onClick={()=>setSteps(0)}
            >
                
                Back
            </Button>
            &emsp;
            <Button
            className="btn btn-primary"
            onClick={()=>{
                if(closingDate!==""){
                    setSteps(2)
                }else{
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
        
                            Step {step+1}
                            <ImageUploader
                                {...props}
                                withIcon={true}
                                onChange={onDrop}
                                buttonText='Choose Featured image'
                                singleImage="true"
                                withPreview='true'
                                imgExtension={[".jpg", ".gif", ".png", ".jpeg"]}
                                maxFileSize={5242880}
                                />
                                


                        

                                <Div d="flex">
                        
                            <Button
                                onClick={()=>setSteps(1)}
                            >
                                
                                Back
                            </Button>
                        
                        <Button
                            
                            onClick={()=>setSteps(3)}
                        >
                        
                        Next
                    </Button>
                    </Div>
                </Div>)
        const stepFour = (<Div>
            Step {step+1}

            <ImageUploader
                {...props}
                withIcon={true}
                onChange={onDrop}
                buttonText='Choose more images (Max 4)'
                withPreview='true'
                
                imgExtension={[".jpg", ".gif", ".png", ".jpeg"]}
                maxFileSize={5242880}
                />


           

                <Div d="flex">
            <Button
                onClick={()=>setSteps(2)}
                
            >
                
                Back
            </Button>
        &emsp;
        <Button
        className="btn btn-primary"
        onClick={()=>setSteps(4)}
    >
        
        Next
    </Button>
    </Div>
</Div>)
        const stepFive = (<Div>
            Step {step+1}
            <input type="number" className="upload-input"  placeholder="Price" />
            <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
            <Checkbox
            />
            I Agree all the shit.
        </Label>
        <Div d="flex">
                <Button
                    onClick={()=>setSteps(3)}
                >Back</Button>&emsp;
            <Button
            className="btn btn-primary"
            onClick={()=>{
                // runUploadImageItemsApi({})

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
                m={{ b: "0.5rem", r: "2rem" }}
            >
                <Radiobox
                onChange={() => setClosingTime(12)}
                checked={ closingTime === 12 }
                name="count"
                />
                12AM
            </Label>
            <Label
                align="center"
                textWeight="600"
                m={{ b: "0.5rem", r: "2rem" }}
            >
                <Radiobox
                onChange={() => setClosingTime(15)}
                checked={ closingTime === 15 }
                name="count"
                />
                3PM
            </Label>
            <Label
                align="center"
                textWeight="600"
                m={{ b: "0.5rem", r: "2rem" }}
            >
                <Radiobox
                onChange={() => setClosingTime(18)}
                checked={ closingTime === 18 }
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
                        m={{ r: "0.5rem" }}
                    />
                    }
                >
                    {error}
                </Notification>)
            

          const onDrop = picture => {
            setPictures([...pictures, picture]);
            console.log("Pics", pictures)
            console.log("Pics", pictures[0])
          };

          function step1Validation(){
              if(title.length>10){
                  if(caption.length>30){
                      if(state!=="Select State"){
                          if(category!=="Select Category"){
                            return true;
                          }else{
                              
                                setError("Select Category")
                                setErrorDark(true)
                          }
                      }else{
                        setError("Select State")
                        setErrorDark(true)
                      }
                  }else{
                        setError("Description Must Contain More Than 30 Characters")
                        setErrorDark(true)
                  }
              }else{
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
            {step === 0?{stepOne}: null}
            {step === 1?{stepTwo}:null}
            {step === 2?{stepThree}:null}
            {step === 3?{stepFour}:null}
            {step === 4?{stepFive}:null}
	  </ThemeProvider>
	  );
	}

const mapStateToProps = (state) => {
    const { auth } = state

    /**
     * Use it as:
     * const user = props.auth.user
     * const error = props.auth.error
    */

    return { auth }
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