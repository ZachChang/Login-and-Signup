import React, { useContext } from 'react';
import { AppContext } from '../context/appContext';

export default Component => props => {
    const { appState } = useContext(AppContext);
    props = {
        ...props,
        notificationMsg: appState.notificationMsg
    };

    return (
        <Component {...props} />
    );
}