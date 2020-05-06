import React from 'react';
import Header from './Header';
import loginHandler from '../handler/loginHandler';
import { MemberFormWrapper, IndexWrapper } from '../style';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { pink } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    paper: {
        background: '#e0e0e02b'
    },
    textField: {
        margin: '15px 0',
        width: '85%',
        '& input:-webkit-autofill': {
            transition: 'background-color 5000s ease-in-out 0s'
        },
        '& input': {
            borderBottom: '1px solid gray'
        }
    },
    confirmBtn: {
        textTransform: 'none',
        margin: '20px 0'
    }
}));

const forFormat = [
    {label: 'Email', name: 'email'},
    {label: 'Password', name: 'password'}
]

export default loginHandler(props => {
    const { handleSubmit, handleInputChange, errors, isShowError } = props;
    const classes = useStyles();

    return (
        <React.Fragment>
            <Header />
            <MemberFormWrapper>
                <Paper className={`${classes.paper} container`}>
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
            </MemberFormWrapper>
        </React.Fragment>
    )
});