import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

const Popup = props => {
    const { open, onClose } = props;
    return (
        <Dialog onClose={onClose} open={open} aria-labelledby="simple-dialog-title">
            {props.children}
        </Dialog>
    );
}

export default Popup;