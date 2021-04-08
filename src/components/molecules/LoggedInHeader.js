import React, {useEffect, useState} from "react";
import {
    ThemeProvider,
    Div,
    Row,
    Col,
    Container,
    DefaultTheme,
    Image,
    Button,
    Icon,
    Text,
    Modal,
    Input,
    Label,
    Textarea
} from "react-atomize";
import {NavLink} from "react-router-dom";

import {DropZone} from "../atoms/DropZone"
import {Formik} from 'formik';
import * as Yup from 'yup';
import styles from '../styles/style';

import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { DateRangePickerCalendar, START_DATE } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'

import Firebase from '../../Firebase/index'
import {bindActionCreators} from "redux";
import {setUser} from "../../redux/actions/authActions";
import {connect} from "react-redux";
import PersonCard from './PersonCard';
import Register from "./Register";
import Upload from "./Upload";

const theme = {
    ...DefaultTheme,
    grid: {
        ...DefaultTheme.grid,
        colCount: 12,
        gutterWidth: 0
    }
};
function LoggedInHeader(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenProfile, setIsOpenProfile] = useState(false);
    const [isOpenContact, setIsOpenContact] = useState(false);
    const [isOpenAbout, setIsOpenAbout] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

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

    return (
        <ThemeProvider theme={theme}>
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
                     
                         <Button
                            onClick={() => {
                                Firebase.auth().signOut().then(() => {
                                    // Sign-out successful.
                                    props.setUser(null)

                                }).catch((error) => {
                                    // An error happened.
                                });
                            }}
                         >Logout</Button>
                    
                </Modal>

            <Modal 
                isOpen={isOpen} 
                onClose={close} 
                align="center" 
                rounded="md" 
                shadow="1"
                 >
                     <Upload/>



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