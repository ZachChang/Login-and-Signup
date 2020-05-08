import React, { useContext } from 'react';
import { useSignupForm } from '../utils/customHooks';
import { AppContext } from '../context/appContext';

export default Component => props => {
    const { appDispatch } = useContext(AppContext);

    const openSignupPopup = () => {
        appDispatch({ type: 'SIGNUP_POPUP_TOGGLE', payload: true })
    }

    const openLoginPopup = () => {
        appDispatch({ type: 'LOGIN_POPUP_TOGGLE', payload: true })
    }

    props = {
        ...props,
        openSignupPopup,
        openLoginPopup
    };

    return (
        <Component {...props} />
    );
}