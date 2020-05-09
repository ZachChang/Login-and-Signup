import React from 'react';
import signupHandler from '../handler/signupHandler';
import { MemberFormWrapper } from '../style/MemberFormWrapper';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Popup from './Popup';
import config from '../config';

const useStyles = makeStyles(() => config.style.signup);

const forFormat = [
    {label: 'Username', name: 'username'},
    {label: 'Email', name: 'email'},
    {label: 'Password', name: 'password'},
    {label: 'Confirm Password', name: 'confirmPassword'}
]

export default signupHandler(props => {
    const { handleSubmit, handleInputChange, errors, isShowError, isPopupOpen, closePopup } = props;
    const classes = useStyles();

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
                        <Button className={classes.confirmBtn} type='submit' variant="outlined">Sign up</Button>
                    </form>
                </div>
            </MemberFormWrapper>
        </Popup>
    )
});