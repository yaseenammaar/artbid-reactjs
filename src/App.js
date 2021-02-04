import React, {Component, useEffect} from "react";
import LoggedOutHeader from "./components/molecules/LoggedOutHeader";
import LoggedInHeader from "./components/molecules/LoggedInHeader";

import Footer from "./components/molecules/Footer";
import Login from "./components/molecules/Login";

import Hero from "./components/molecules/Hero";
import Profile from "./components/molecules/Profile";
import {connect, Provider as ReduxProvider} from "react-redux"
import firebaseInstance from "./Firebase/index"


import {
    ThemeProvider,
    DefaultTheme
} from "react-atomize";

import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import reduxStore from "./redux/reduxStore";
import {setError, setUser} from "./redux/actions/authActions";
import {bindActionCreators} from "redux";

const theme = {
    ...DefaultTheme,
    grid: {
        ...DefaultTheme.grid,
        colCount: 12,
        gutterWidth: 0
    }
};

const bgImage = "https://source.unsplash.com/collection/1065396/1600x900";
const bgImageValue = `url(${bgImage})`;

function Main(props){

    useEffect(() => {
        firebaseInstance.auth().onAuthStateChanged(function(user) {
            console.log("user is : ", user)
            props.setUser(user)
        })
    }, [])

        return (

                <HashRouter>
                    <ThemeProvider theme={theme}>
                        {
                            props.auth.user == null?
                                <LoggedOutHeader/>
                                :
                                <LoggedInHeader/>

                        }
                        <Route exact path="/" component={Hero}/>
                        <Route exact path="/stuff" component={Hero}/>
                        <Route exact path="/contact" component={Hero}/>
                        <Route exact path="/profile" component={Profile}/>
                        <Route exact path="/login" component={Login}/>

                       

                        <Footer/>
                    </ThemeProvider>
                </HashRouter>

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
        setError
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Main)