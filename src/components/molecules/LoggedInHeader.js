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
    Input
} from "react-atomize";
import {NavLink} from "react-router-dom";
import {Formik} from 'formik';
import * as Yup from 'yup';

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

    const loginSchema = Yup.object().shape({
        phoneNumber: Yup.string().required("Phone Number required."),
        otp: Yup.number().required("otp required").positive().integer()
    })

    function close() {
        setIsOpen(false)
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

            
        </ThemeProvider>
    );
}