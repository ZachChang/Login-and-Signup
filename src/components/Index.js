import React, { useEffect, useContext, useState } from 'react';
import AuthHandler from '../handler/authHandler';
import { withRouter } from 'next/router';
import { AppContext } from '../context/appContext';
import { UserContext } from '../context/userContext';
import appReducer from '../reducers/appReducer';
import userReducer from '../reducers/userReducer';
import useCustomReducer from '../helper/useCustomReducer';
import MainChart from './MainChart';
import Header from './Header';
import Notification from './Notification';
import Login from './Login';
import Signup from './Signup';
import Loading from './Loading';
import config from '../config';

export default withRouter(AuthHandler(props => {
    const { authToken } = props;
    const isDev = config.isDev;
    const [loginInfo, setloginInfo] = useState('');

    useEffect(() => {
        if (authToken) {
            // call user's info 
            console.log('login as a member');
        } else {
            console.log('login as a guest');
        }
    }, [authToken]);
    
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('activation')==='success') {
            setloginInfo('Your account was successfully verified!%%Now login to create your own thoughts.')
            appDispatch({ type: 'LOGIN_POPUP_TOGGLE', payload: true })
        }
    }, [])

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
                <Loading />
                <Header />
                <Notification />
                <MainChart />
                <Login info={loginInfo} setloginInfo={setloginInfo}/>
                <Signup />
            </UserContext.Provider>
        </AppContext.Provider>
    )
}));
