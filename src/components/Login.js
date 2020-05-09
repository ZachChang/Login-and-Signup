import React, { useEffect } from 'react';
import loginHandler from '../handler/loginHandler';
import { MemberFormWrapper } from '../style/MemberFormWrapper';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Popup from './Popup';
import config from '../config';

const useStyles = makeStyles(() => config.style.signup);

const forFormat = [
    {label: 'Email', name: 'email'},
    {label: 'Password', name: 'password'}
]

export default loginHandler(props => {
    const { handleSubmit, handleInputChange, errors, isShowError, isPopupOpen, closePopup } = props;
    const classes = useStyles();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('activation')==='success') {
            setIsPopupOpen(true);
        }
    }, [])

    return (
        <Popup open={isPopupOpen} onClose={closePopup}>
            <MemberFormWrapper>
                <div className='container'>
                    <form onSubmit={handleSubmit}>
                        {forFormat.map((item, index) => 
                            <TextField
                                key={index}
                                className={classes.textField}
                                name={item.name}
                                id={item.name}
                                label={item.label}
                                error={isShowError && errors[item.name] ? true : false}
                                helperText={isShowError && errors[item.name] ? errors[item.name] : ''}
                                type={item.name === 'password' || item.name === 'confirmPassword' ? 'password' : 'text'}
                                onChange={handleInputChange}
                            >
                            </TextField>
                        )}
                        <Button className={classes.confirmBtn} type='submit' variant="outlined">Login</Button>
                    </form>
                </div>
            </MemberFormWrapper>
        </Popup>
    )
});