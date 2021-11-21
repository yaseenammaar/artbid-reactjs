import React, {useEffect, useState} from "react";
import {
    ThemeProvider,
    Div,
    Row,
    Col,
    DefaultTheme,
    Image,
    Button,
    Icon,
    Text,
    Modal,
    Notification
} from "react-atomize";
import {NavLink, useRouteMatch} from "react-router-dom";
import {Link} from "react-router-dom"


import styles from '../../../styles/style';

import { START_DATE } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'

import {bindActionCreators} from "redux";
import {setUser} from "../../../redux/actions/authActions";
import {connect} from "react-redux";
import PersonCard from '../person/PersonCard';
import Register from "../../pageComponents/login/Register";
import Upload from "../../pageComponents/uploadArt/Upload";
import useUploadItem from "../../../hooks/useUploadItem";
import {Line} from "rc-progress"

const theme = {
    ...DefaultTheme,
    grid: {
        ...DefaultTheme.grid,
        colCount: 12,
        gutterWidth: 0
    }
};
function LoggedInHeader(props) {
    const { url } = useRouteMatch()
    /**
     * uploadState: {
     *     uploadProgress -> progress of upload,
     *     done - > true if upload work is done after starting through function uploadItemData, otherwise false,
     *     error -> null if no error is there, else will give error message,
     *     isUploading -> true when upload work is going on, otherwise false
     * }
     */
    const {uploadState, uploadItemData} = useUploadItem()

    const [isOpen, setIsOpen] = useState(false);
    const [showProcessing, setShowProcessing] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    function close() {
        setIsOpen(false)
    }
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const [focus, setFocus] = useState(START_DATE)
    const handleFocusChange = newFocus => {
        setFocus(newFocus || START_DATE)
    }
    const processingNotification = (
        <Notification
            isOpen={showProcessing}
            bg="warning100"
              textColor="warning800"
              prefix={
                <Icon
                  name="Alert"
                  color="warning800"
                  size="18px"
                  m={{ r: "0.5rem" }}
                />
              }
          >
            Please Wait.. Uploading Item!
            <Line percent={uploadState.uploadProgress} strokeWidth="3" strokeColor="#7FFF00" trailWidth={3} trailColor={"#DCDCDC"}/>
          </Notification>)

    const successNotification = (
        <Notification
            bg="success100"
            textColor="success800"
            isOpen={showSuccess}
            onClose={() => setShowSuccess(false)}

            prefix={
                <Icon
                name="Success"
                color="success800"
                size="18px"
                m={{ r: "0.5rem" }}
                />
            }
            >
            Upload Successfull!
            </Notification>)

    return (
        <ThemeProvider theme={theme}>
            {processingNotification}
            {successNotification}
            <Row
            m={{t:"1.5rem"}}
//            pos="fixed"

            >
                <Col size={{xs: 0, lg: 1}}>

                </Col>
                <Col size={{xs: 1, lg: 1}}
              >
                    <NavLink to="/"><Image
                        src="./img/ar_grey.png"
                        h="2rem"
                        w="auto"
                    />
                    </NavLink>
                </Col>

                <Col size={{xs: 3, lg: 5}}>

                </Col>
                <Col size={{xs: 1, lg: 1}}>
                        <NavLink to={`${url}/about_us`}><Button
                            h="2.5rem"
                            p={{x: "1rem"}}
                            textSize="body"
                            textColor="gray900"
                            bg="white"
                            fontFamily="primary"
                            m={{r: "0.5rem"}}
                        >
                            About
                        </Button></NavLink>
                </Col>

                <Col size={{xs: 2, lg: 1}}>
                    <NavLink to={`${url}/contact_us`}><Button
                        h="2.5rem"
                        p={{x: "1rem"}}
                        textSize="body"
                        textColor="gray900"
                        bg="white"
                        fontFamily="primary"
                        m={{r: "0.5rem"}}
                    >
                        Contact
                    </Button></NavLink>
                </Col>
                <Col size={{xs: 2, lg: 1}}>
                        <Link to={{pathname: "/myprofile"}}>
                            <Button
                                h="2.5rem"
                                p={{x: "1rem"}}
                                textSize="body"
                                textColor="gray900"
                                bg="white"
                                fontFamily="primary"
                                m={{r: "0.5rem"}}
                            >
                                Profile
                            </Button>
                        </Link>
                </Col>
                <Col size={{xs: 2, lg: 1}}>
                    <Button
                        bg="white"
                        textColor="gray900"
                        p={{r: "3rem", l: "3rem"}}
                        shadow="1"
                        hoverShadow="2"
                        fontFamily="primary"
                        onClick={() => setIsOpen(true)}
                    >
                        Upload
                    </Button>
                </Col>
                <Col size={{xs: 1, lg: 1}}>

                </Col>
            </Row>

            <Modal
                isOpen={isOpen} 
                onClose={close} 
                align="center" 
                rounded="md" 
                shadow="1"
                 >
                     <Upload

                         onSaveButtonClicked={(itemData) => {
                             (async () => {
                                 try {
                                     //TODO: show progress in progress bar using uploadState.uploadProgress

                                     setShowProcessing(true)
                                     setIsOpen(false)
                                     const resData = await uploadItemData(itemData)
                                     console.log("upload data is :", resData)
                                     setShowProcessing(false)
                                     setShowSuccess(true)
                                 }
                                 catch (e) {
                                     console.error("error while uploading :",e)

                                     // TODO: close processing and success notification and show error notification
                                     setShowProcessing(false)
                                     setShowSuccess(false)
                                 }

                             })();
                         }}
                        />

            </Modal>

        </ThemeProvider>
    );

    //Photos
    //Date and Time
    //Cost
    //TnC
    
}


const mapStateToProps = (state) => {
    const { auth } = state

    /**
     * Use it as:
     * const user = props.auth.user
     * const isNewUser = props.auth.isNewUser
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

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInHeader)