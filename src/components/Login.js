import React from 'react';
import signupHandler from '../handler/signupHandler';
import { SignupWrapper, IndexWrapper } from '../style';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    paper: {
        background: '#a5a5a536'
    },
    textField: {
        margin: '15px 0',
        width: 300
    },
    confirmBtn: {
        margin: '20px 0'
    }
}));

const forFormat = [
    {label: 'Email', name: 'email'},
    {label: 'Password', name: 'password'}
]

export default signupHandler(props => {
    const { handleSubmit, handleInputChange, errors, isShowError } = props;
    const classes = useStyles();

    return (
        <IndexWrapper>
            <SignupWrapper>
                <Paper className={classes.paper}>
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
                </Paper>
            </SignupWrapper>
        </IndexWrapper>
    )
});