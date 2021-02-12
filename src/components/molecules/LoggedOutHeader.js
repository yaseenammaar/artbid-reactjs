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
import PhoneAuth from "./PhoneAuth";
import styles from "../styles/style";
import Login from './Login';
import Register from "./Register";

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
                <Col size={{xs: 1, lg: 2}}>

                </Col>
                <Col size={{xs: 2, lg: 1}}>
                    <NavLink to="/"><Image
                        src="./img/ar_grey.png"
                        h="2rem"
                        w="auto"
                    />
                    </NavLink>
                </Col>

                <Col size={{xs: 3, lg: 4}}>

                </Col>
                <Col size={{xs: 1, lg: 1}}>
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

                <Col size={{xs: 1, lg: 1}}>
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
                <Col size={{xs: 1, lg: 1}}>
                    <Button
                        bg="white"
                        textColor="gray900"
                        p={{r: "3rem", l: "3rem"}}
                        shadow="1"
                        hoverShadow="2"
                        fontFamily="primary"
                        onClick={() => setIsOpen(true)}
                    >
                        Login
                    </Button>
                </Col>
                <Col size={{xs: 12, lg: 2}}>

                </Col>
            </Row>

            <Formik
                initialValues={{phoneNumber: '', otp: ''}}
                validationSchema={loginSchema}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >

                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                  }) => (
                    <Modal 
                        w="25rem"
                        isOpen={isOpen} 
                        onClose={close} 
                        align="center" 
                        rounded="md" 
                        shadow="1" 
                    >
                        {/* <Login/> */}
                        {/* <Register/> */}

                        <PhoneAuth /> 
                    </Modal>
                )}
            </Formik>
        </ThemeProvider>
    );
}

