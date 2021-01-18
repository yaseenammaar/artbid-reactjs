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

                <Col size={{xs: 12, lg: 4}}>

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
                        {/*<Div fontFamily="secondary" textSize="heading" d="flex" justify="center">
                            <Text>

                            </Text>
                        </Div>
                        <Div d="flex" m={{t: "2rem", b: "2rem", r: "6rem", l: "6rem"}}>
                            <Input
                                name={"phoneNumber"}
                                placeholder="Phone Number"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phoneNumber}
                                size="10px"
                                suffix={
                                    <Icon
                                        name="UserSolid"
                                        color="info800"
                                        size="16px"
                                        cursor="pointer"
                                        pos="absolute"
                                        top="50%"
                                        right="0.75rem"
                                        transform="translateY(-50%)"
                                    />
                                }
                            />

                        </Div>
                        <Div d="flex" justify="center">
                            <Button onClick={close} bg="info700">
                                Send OTP
                            </Button>
                        </Div>*/}

                        <PhoneAuth />
                    </Modal>
                )}
            </Formik>
        </ThemeProvider>
    );
}