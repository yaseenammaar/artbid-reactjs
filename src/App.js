import React, {useEffect, useState} from "react";
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
import {setUser} from "./redux/actions/authActions";
import {bindActionCreators} from "redux";
import CreditCard from "./components/molecules/CreditCard";
import SearchResultPage from "./pages/SearchResultPage";
import Art from "./pages/Art";

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

function Main(props) {

    const [isInitializingApp, setInitializingApp] = useState(true)
    useEffect(() => {
        firebaseInstance.auth().onAuthStateChanged(async function (user) {
            setInitializingApp(false)
            console.log("user is : ", user)
            if (user == null) {
                await firebaseInstance.auth().signInAnonymously();
            }
            props.setUser(user)
        })
    }, [])

    return (
        isInitializingApp ?
            <div>loading app...</div>
            :
            <ThemeProvider theme={theme}>
                <HashRouter>
                    {/* {
                        props.auth.user == null || props.auth.user.isAnonymous ?
                            <LoggedOutHeader/>
                            :
                            <LoggedInHeader/>

                    } */}
                    {/* <CreditCard/> */}
                    <Route exact path="/" component={Hero}/>
                    <Route exact path="/stuff" component={Hero}/>
                    <Route exact path="/contact" component={Hero}/>
                    <Route exact path="/profile" component={Profile}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path={"/search_result"} component={SearchResultPage}/>
                    <Route exact path={"/art"} component={Art}/>


                    <Footer/>
                </HashRouter>
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

export default connect(mapStateToProps, mapDispatchToProps)(Main)