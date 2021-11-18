import React, {useState} from "react";
import firebaseInstance from "../../../Firebase";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {bindActionCreators} from "redux";
import {setIsNewUser, setUser} from "../../../redux/actions/authActions";
import {connect} from "react-redux";

function PhoneAuth(props) {

    const handleError = async (error) => {
        if (error.code !== 'firebaseui/anonymous-upgrade-merge-conflict') {
            return Promise.resolve();
        }
        // The credential the user tried to sign in with.
        const cred = error.credential;
        const currentAnonymousUser = firebaseInstance.auth().currentUser

        // TODO:Copy data from anonymous user to permanent user and delete anonymous user.
        await currentAnonymousUser.delete()

        // Finish sign-in after data is copied.
        return firebaseInstance.auth().signInWithCredential(cred);
    }

    const uiConfig = {
        signInOptions: [ {
            provider: firebaseInstance.auth.PhoneAuthProvider.PROVIDER_ID,
            defaultCountry: 'IN',
        }],
        autoUpgradeAnonymousUsers: true,
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
                props.setIsNewUser(isNewUser);
                props.setUser(user);
                return false;   // Don't redirect
            },
            signInFailure: function(error) {
                // Some unrecoverable error occurred during sign-in.
                // Return a promise when error handling is completed and FirebaseUI
                // will reset, clearing any UI. This commonly occurs for error code
                // 'firebaseui/anonymous-upgrade-merge-conflict' when merge conflict
                // occurs. Check below for more details on this.

                return handleError(error)
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
        setIsNewUser
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(PhoneAuth)