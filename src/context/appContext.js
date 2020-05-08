import React from 'react';

export const AppContext = React.createContext({
    popupMsg: '',
    isLoginPopupOpen: false,
    isSignupPopupOpen: false
})