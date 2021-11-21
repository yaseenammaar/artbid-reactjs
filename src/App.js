import React, {useEffect, useState} from "react";
import LoggedOutHeader from "./components/molecules/navbar/LoggedOutHeader";
import LoggedInHeader from "./components/molecules/navbar/LoggedInHeader";
import Footer from "./components/molecules/footer/Footer";
import Login from "./components/pageComponents/login/Login";
import RouteWithModals from "./components/atoms/RouteWithModals";
import Profile from "./pages/Profile";
import Artist from "./pages/Artist/Artist";
import MyProfile from "./pages/MyProfile/Artist";
import { connect } from "react-redux"
import firebaseInstance from "./Firebase/index"


import {
    ThemeProvider,
    DefaultTheme
} from "react-atomize";

import {
    Route,
    HashRouter,
    Switch, BrowserRouter
} from "react-router-dom";
import {setUser} from "./redux/actions/authActions";
import {bindActionCreators} from "redux";
import SearchResultPage from "./pages/SearchResult/SearchResultPage";
import Art from "./pages/Art/Art";
import Home from "./pages/Home/Home";

const theme = {
    ...DefaultTheme,
    grid: {
        ...DefaultTheme.grid,
        colCount: 12,
        gutterWidth: 0
    }
};



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
                     {
                        props.auth.user == null || props.auth.user.isAnonymous ?
                            <LoggedOutHeader/>
                            :
                            <LoggedInHeader/>

                    }
                    <Switch>
                        <RouteWithModals path="/profile" component={Profile}/>
                        <RouteWithModals path={"/search_result"} component={SearchResultPage}/>
                        <RouteWithModals path={"/art"} component={Art}/>
                        <RouteWithModals path={"/artist"} component={Artist}/>
                        <RouteWithModals path={"/myprofile"} component={MyProfile}/>
                        <RouteWithModals path="/" component={Home}/>
                    </Switch>

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