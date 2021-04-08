import React, {useState} from "react";
import {
    ThemeProvider,
    Div,
    Row,
    Col,
    Dropdown,
    Anchor,
    Container,
    DefaultTheme,
    Image,
    Button,
    Icon,
    Text,
    Input, Modal
} from "react-atomize";
import SearchLoading from "../atoms/SearchLoading"

import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {setUser} from "../../redux/actions/authActions";
import styles from "../styles/style";
import PersonCardWithImage from './PersonCardWithImage'
import PersonSnippet from './PersonSnippet'
import heroImage from '../../assets/images/hero.webp';
import PhoneAuth from "./PhoneAuth";
import getSuggestions from "../../logics/getSuggestions";


const theme = {
    ...DefaultTheme,
    grid: {
        ...DefaultTheme.grid,
        colCount: 12,
        gutterWidth: 2
    }

};

function Hero() {

    const [showDropdown, setShowDropdown] = useState(false)
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false)

    const menuList = (
        <Div>
            {suggestions.map((name, index) => (
                <Anchor d="block" p={{y: "0.25rem"}}>
                    {name}
                </Anchor>
            ))}
        </Div>
    );


    return (
        <ThemeProvider theme={theme}>
            <Row>
                <Col size={1}/>
                <Col size={10}>
                    <Div
                        h="30rem"
                        align="center"
                        justify="center"
                        shadow="1"
                        rounded="lg"
                        bg="warning400"
                        bgImg={heroImage}
                        bgSize="cover"
                        bgPos="center"
                        hoverShadow="5"
                        m={{t: "2rem"}}
                        p={{t: "8rem"}}
                        transition
                    >
                        <Text fontFamily="primary" textColor="white" textSize="display1" textAlign="center">
                            Welcome to ArtBid
                        </Text>
                        <Text fontFamily="primary" textColor="white" textSize="display4" textAlign="center">
                            Online Public Auction Platform
                        </Text>
                        <Div
                            d="flex"
                            justify="center">

                            <Dropdown
                                style={{margin: 20}}
                                isOpen={showDropdown}
                                onClick={() => {
                                    (async () => {
                                        console.time("suggestions fetch execution time")
                                        setShowDropdown(!showDropdown)
                                        const res = await getSuggestions("ge")
                                        console.log(res)
                                        setSuggestions(res)
                                        console.timeEnd("suggestions fetch execution time")
                                    })()

                                }}
                                menu={menuList}
                            >
                                Click me
                            </Dropdown>


                        </Div>
                        <Div
                            m={{t: "2.0rem"}}
                            d={"flex"}
                            justify={"center"}
                        >

                            <SearchLoading
                                showSuggestions={showSuggestions}
                                searchButtonOnClick={() => {

                                }}

                                onFocusSearch={() => {
                                    setShowSuggestions(true)
                                }}

                                onBlurSearch={() => {
                                    setShowSuggestions(false)
                                }}
                            />

                        </Div>
                    </Div>

                    <Div d="flex" style={styles.products__container}>
                    
                    <PersonCardWithImage/>
                    <PersonCardWithImage/>
                    <PersonCardWithImage/>
                    </Div>


                </Col>
                <Col size={1}/>
            </Row>


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


export default connect(mapStateToProps, mapDispatchToProps)(Hero)