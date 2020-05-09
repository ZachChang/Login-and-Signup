import React, { useContext } from 'react'
import { NotificationWrapper } from '../style/NotificationWrapper';
import { AppContext } from '../context/appContext';

export default props => {
    const { appState } = useContext(AppContext);
    return (
        <React.Fragment>
            {
                appState.notificationMsg !== '' &&
                    <NotificationWrapper>{appState.notificationMsg}</NotificationWrapper>
            }
        </React.Fragment>
    )
}
