import React, { useState, useContext } from 'react';
import apiUtility from '../utils/apiUtility';
import { useSignupForm } from '../utils/customHooks';
import { AppContext } from '../context/appContext';

export default Component => props => {
    const login = (formData) => {
        apiUtility.login(formData)
            .then( res => console.log(res))
            .catch(err => console.log(err))
    }
    const {inputs, handleInputChange, handleSubmit, errors, isShowError} = useSignupForm(login, true);
    const { appState, appDispatch } = useContext(AppContext);

    const closePopup = () => {
        appDispatch({ type: 'LOGIN_POPUP_TOGGLE', payload: false })
    }

    props = {
        ...props,
        inputs,
        handleInputChange,
        handleSubmit,
        errors,
        isShowError,
        isPopupOpen: appState.isLoginPopupOpen,
        closePopup
    };

    return (
        <Component {...props} />
    );
}