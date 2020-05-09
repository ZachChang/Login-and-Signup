import React from 'react';

export const AppContext = React.createContext({
    popupMsg: '',
    notificationMsg: '',
    isLoginPopupOpen: false,
    isSignupPopupOpen: false
})