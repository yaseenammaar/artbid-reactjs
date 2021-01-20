import React, {useState} from "react";
import firebaseInstance from "../../Firebase/index";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {bindActionCreators} from "redux";
import {setError, setUser} from "../../redux/actions/authActions";
import {connect} from "react-redux";

function PhoneAuth(props) {

    const uiConfig = {
        signInOptions: [
            firebaseInstance.auth.PhoneAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                const user = authResult.user;
                const credential = authResult.credential;
                const isNewUser = authResult.additionalUserInfo.isNewUser;
                const providerId = authResult.additionalUserInfo.providerId;
                const operationType = authResult.operationType;
                // Do something with the returned AuthResult.
                // Return type determines whether we continue the redirect
                // automatically or whether we leave that to developer to handle.
                props.setUser(user);
                return false;   // Don't redirect
            },
            signInFailure: function(error) {
                // Some unrecoverable error occurred during sign-in.
                // Return a promise when error handling is completed and FirebaseUI
                // will reset, clearing any UI. This commonly occurs for error code
                // 'firebaseui/anonymous-upgrade-merge-conflict' when merge conflict
                // occurs. Check below for more details on this.

                // return handleError(error)
            },
            uiShown: function() {
                // The widget is rendered.
                // Hide the loader.
                //document.getElementById('loader').style.display = 'none';
            }
        },
    }

    return (
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseInstance.auth()}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(PhoneAuth)