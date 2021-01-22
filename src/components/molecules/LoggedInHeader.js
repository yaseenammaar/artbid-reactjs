import React, {useState} from "react";
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

import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { DateRangePickerCalendar, START_DATE } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'

const theme = {
    ...DefaultTheme,
    grid: {
        ...DefaultTheme.grid,
        colCount: 12,
        gutterWidth: 0
    }
};
export default function LoggedOutHeader() {
    const [isOpen, setIsOpen] = useState(false);

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
            <Row>
                <Col size={{xs: 12, lg: 2}}>

                </Col>
                <Col size={{xs: 12, lg: 1}}>
                    <NavLink to="/"><Image
                        src="./img/ar_grey.png"
                        h="2rem"
                        w="auto"
                    />
                    </NavLink>
                </Col>

                <Col size={{xs: 12, lg: 3}}>

                </Col>
                <Col size={{xs: 12, lg: 1}}>
                    <NavLink to="/about"
                             style={{textDecoration: 'none'}}>
                        <Button
                            h="2.5rem"
                            p={{x: "1rem"}}
                            textSize="body"
                            textColor="gray900"
                            bg="white"
                            fontFamily="primary"
                            m={{r: "0.5rem"}}
                        >
                            About
                        </Button>
                    </NavLink>
                </Col>

                <Col size={{xs: 12, lg: 1}}>
                    <Button
                        h="2.5rem"
                        p={{x: "1rem"}}
                        textSize="body"
                        textColor="gray900"
                        bg="white"
                        fontFamily="primary"
                        m={{r: "0.5rem"}}
                    >
                        Contact
                    </Button>
                </Col>
                <Col size={{xs: 12, lg: 1}}>
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
                </Col>
                <Col size={{xs: 12, lg: 1}}>
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
                <Col size={{xs: 12, lg: 2}}>

                </Col>
            </Row>

            <Modal isOpen={isOpen} onClose={close} align="center" rounded="md" shadow="1" >

                        <Icon
                            name="Cross"
                            pos="absolute"
                            top="1rem"
                            right="1rem"
                            size="16px"
                            onClick={close}
                            cursor="pointer"
                        />

                        <Div>
                            <Label 
                                fontFamily="primary"
                                >Title
                                <Input />
                            </Label>
                            <Label
                                fontFamily="primary">
                                Short Description
                                <Textarea />
                            </Label> 
                            <Label
                                fontFamily="primary">
                                    Closing Date
                                    
                            </Label>
                            
                            <DropZone/>
                            <Button
                            bg="white"
                            textColor="info900"
                            p={{r: "3rem", l: "3rem"}}
                            shadow="1"
                            hoverShadow="2"
                            fontFamily="primary"
                            onClick={() => setIsOpen(true)}
                        >
                            Next
                        </Button>
                    </Div>


                    </Modal>

            
        </ThemeProvider>
    );

    
}