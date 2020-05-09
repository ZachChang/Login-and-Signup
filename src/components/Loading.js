import React, {useContext} from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { AppContext } from '../context/appContext';

export default function Loading() {
    const { appState } = useContext(AppContext);
    return(
        <Backdrop open={appState.isShowLoading} onClick={null}>
            <CircularProgress color='inherit' />
        </Backdrop>
    )
}