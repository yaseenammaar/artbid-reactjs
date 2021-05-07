import React, {useState} from "react";
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
import {NavLink} from "react-router-dom";

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

const theme = {
    ...DefaultTheme,
    grid: {
        ...DefaultTheme.grid,
        colCount: 12,
        gutterWidth: 0
    }
};
function LoggedInHeader(props) {

    /**
     * uploadState: {
     *     uploadProgress -> progress of upload,
     *     done - > true if upload work is done after starting through function uploadItemData, otherwise false,
     *     error -> null if no error is there, else will give error message,
     *     isUploading -> true when upload work is going on, otherwise false
     * }
     */
    const {uploadState, uploadItemData} = useUploadItem()

    const [isOpen, setIsOpen] = useState(true);
    const [isOpenProfile, setIsOpenProfile] = useState(false);
    const [isOpenContact, setIsOpenContact] = useState(false);
    const [isOpenAbout, setIsOpenAbout] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [showProcessing, setShowProcessing] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);



    function closeAbout() {
        setIsOpenAbout(false)
    }
    function closeContact() {
        setIsOpenContact(false)
    }

    function closeProfile() {
        setIsOpenProfile(false)
    }
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
                        <Button
                            h="2.5rem"
                            p={{x: "1rem"}}
                            textSize="body"
                            textColor="gray900"
                            bg="white"
                            fontFamily="primary"
                            m={{r: "0.5rem"}}
                            onClick={() => setIsOpenAbout(true)}
                        >
                            About
                        </Button>
                </Col>

                <Col size={{xs: 2, lg: 1}}>
                    <Button
                        h="2.5rem"
                        p={{x: "1rem"}}
                        textSize="body"
                        textColor="gray900"
                        bg="white"
                        fontFamily="primary"
                        m={{r: "0.5rem"}}
                        onClick={() => setIsOpenContact(true)}
                    >
                        Contact
                    </Button>
                </Col>
                <Col size={{xs: 2, lg: 1}}>
                    
                        <Button
                            h="2.5rem"
                            p={{x: "1rem"}}
                            textSize="body"
                            textColor="gray900"
                            bg="white"
                            fontFamily="primary"
                            m={{r: "0.5rem"}}
                            onClick={() => setIsOpenProfile(true)}
                        >
                            Profile
                        </Button>
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
                isOpen={isOpenAbout} 
                onClose={closeAbout} 
                align="center" 
                rounded="md" 
                shadow="1"
                 >
                     <Div>

                        <Icon
                            name="Cross"
                            pos="absolute"
                            top="1rem"
                            right="1rem"
                            size="16px"
                            onClick={closeAbout}
                            cursor="pointer"
                        />
                         <Text>About</Text>
                    </Div>
                </Modal>


            <Modal 
                isOpen={isOpenContact} 
                onClose={closeContact} 
                align="center" 
                rounded="md" 
                shadow="1"
                 >
                     <Div>

                        <Icon
                            name="Cross"
                            pos="absolute"
                            top="1rem"
                            right="1rem"
                            size="16px"
                            onClick={closeContact}
                            cursor="pointer"
                        />
                         <Text>Contact</Text>
                    </Div>
                </Modal>


            <Modal 
                style={styles.person__card}
                isOpen={isOpenProfile} 
                onClose={closeProfile} 
                align="center" 
                rounded="md" 
                shadow="1"
                 >
                     <PersonCard/>
                     
                         
                    
                </Modal>

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

            <Modal
                isOpen={isRegisterOpen}
                onClose={() => setIsRegisterOpen(false)}
                align="center"
                rounded="md"
                shadow="1"
            >

                <Register />

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
     * const error = props.auth.isNewUser
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