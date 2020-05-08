import React, { useEffect, useContext } from 'react';
import AuthHandler from '../handler/authHandler';
import { withRouter } from 'next/router';
import { AppContext } from '../context/appContext';
import { UserContext } from '../context/userContext';
import appReducer from '../reducers/appReducer';
import userReducer from '../reducers/userReducer';
import useCustomReducer from '../helper/useCustomReducer';
import MainChart from './MainChart';
import Header from './Header';
import Login from './Login';
import Signup from './Signup';
import config from '../config';

export default withRouter(AuthHandler(props => {
    const { authToken } = props;
    const isDev = config.isDev;
    useEffect(() => {
        if (authToken) {
            // call user's info 
            console.log('login as a member');
        } else {
            console.log('login as a guest');
        }
    }, [authToken]);

    const [appState, appDispatch] = useCustomReducer(
        appReducer,
        useContext(AppContext),
        isDev
    );

    const [userState, userDispatch] = useCustomReducer(
        userReducer,
        useContext(UserContext),
        isDev
    );

    return (
        <AppContext.Provider value={{appState, appDispatch}}>
            <UserContext.Provider value={{userState, userDispatch}}>
                <Header />
                <MainChart />
                <Login />
                <Signup />
            </UserContext.Provider>
        </AppContext.Provider>
    )
}));
