import React, { useContext } from 'react';
import apiUtility from '../utils/apiUtility';
import { useSignupForm } from '../utils/customHooks';
import { AppContext } from '../context/appContext';
import { useRouter } from 'next/router'

export default Component => props => {
    const { appState, appDispatch } = useContext(AppContext);
    const router = useRouter()
    const signup = (formData) => {
        appDispatch({ type: 'SIGNUP_POPUP_TOGGLE', payload: false })
        appDispatch({type: 'TOGGLE_LOADING', payload: true});
        apiUtility.register(formData)
            .then( res => {
                appDispatch({type: 'TOGGLE_LOADING', payload: false});
                if (res.result==='success') {
                    appDispatch({type: 'WRITE_NOTIFICATION_MSG', payload: res.message});
                } else {
                    router.push('/error')
                }
            })
            .catch(err => {
                appDispatch({type: 'TOGGLE_LOADING', payload: false});
                router.push('/error')
            })
    }
    const { inputs, handleInputChange, handleSubmit, errors, isShowError } = useSignupForm(signup);
    
    const closePopup = () => {
        appDispatch({ type: 'SIGNUP_POPUP_TOGGLE', payload: false })
    }

    props = {
        ...props,
        inputs,
        handleInputChange,
        handleSubmit,
        errors,
        isShowError,
        isPopupOpen: appState.isSignupPopupOpen,
        closePopup
    };

    return (
        <Component {...props} />
    );
}