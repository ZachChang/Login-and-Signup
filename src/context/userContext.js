import React from 'react';

export const UserContext = React.createContext({
    token: '',
    userName: '',
    userEmail: '',
    language: 'EN'
})