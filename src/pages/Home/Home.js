import React, {useEffect} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setUser} from "../../redux/actions/authActions";
import { Hero, Paintings, TopArtist, Exclusive, Trending } from '../../components/pageComponents/Home'
import {DefaultTheme, ThemeProvider} from "react-atomize";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/global.scss';
import Recents from "../../components/pageComponents/Home/Recents";
import AllModalRoutes from "../../components/molecules/modals/AllModalRoutes";
import PhoneAuthModal from "../../components/molecules/modals/modalComponents/PhoneAuth";
import {Link, Route, useRouteMatch} from "react-router-dom";

function Home(props) {
    useEffect(() => {
        console.log("useEffect: Home called", props.auth.takeProfileData)
    }, [props.auth.takeProfileData])

    return(
        <ThemeProvider theme={theme}>
            <Hero />
            <Trending />
            <TopArtist />
            <Recents />
            {/* <Paintings />*/}

        </ThemeProvider>
    )
}

const theme = {
    ...DefaultTheme,
    grid: {
        ...DefaultTheme.grid,
        colCount: 12,
        gutterWidth: 2
    }

};

const mapStateToProps = (state) => {
    const {auth} = state

    /**
     * Use it as:
     * const user = props.auth.user
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)