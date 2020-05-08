import React, { useContext } from 'react';
import apiUtility from '../utils/apiUtility';
import { useSignupForm } from '../utils/customHooks';
import { AppContext } from '../context/appContext';

export default Component => props => {
    const signup = (formData) => {
        apiUtility.register(formData)
            .then( res => console.log(res))
            .catch(err => console.log(err))
    }
    const { inputs, handleInputChange, handleSubmit, errors, isShowError } = useSignupForm(signup);
    const { appState, appDispatch } = useContext(AppContext);

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