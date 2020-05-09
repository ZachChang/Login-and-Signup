import React from 'react'
import notificationHandler from '../handler/notificationHandler';
import { NotificationWrapper } from '../style/NotificationWrapper';
import Typography from '@material-ui/core/Typography';

export default notificationHandler(props => {
    return (
        <NotificationWrapper isShow={props.notificationMsg !== ''}>
            <Typography variant="h7">
                {props.notificationMsg}
            </Typography>
        </NotificationWrapper>
    )
});
