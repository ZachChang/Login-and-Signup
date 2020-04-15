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

export default signupHandler(props => {
    const { handleSubmit, handleInputChange, errors, isShowError } = props;
    const classes = useStyles();

    return (
        <IndexWrapper>
            <SignupWrapper>
                <Paper className={classes.paper}>
                    <form onSubmit={handleSubmit}>
                        <TextField className={classes.textField} id="standard-basic" label="Username">
                            {isShowError && errors.username && <div>{errors.username}</div>}
                            <input
                                type="text"
                                name="username"
                                onChange={handleInputChange}
                                className="form-control"
                                placeholder="Username"
                            
                            />
                        </TextField>
                        <TextField className={classes.textField} id="standard-basic" label="Email">
                            {isShowError && errors.email && <div>{errors.email}</div>}
                            <input
                                type="text"
                                name="email"
                                onChange={handleInputChange}
                                placeholder="Email"
                            />
                        </TextField>
                        <TextField className={classes.textField} id="standard-basic" label="Password">
                            {isShowError && errors.password && <div>{errors.password}</div>}
                            <input
                                type="password"
                                name="password"
                                onChange={handleInputChange}
                                className="form-control"
                                placeholder="Password"
                            />
                        </TextField>
                        <TextField className={classes.textField} id="standard-basic" label="Confirm Password">
                            {isShowError && errors.confirmPassword && <div>{errors.confirmPassword}</div>}
                            <input
                                type="password"
                                name="confirmPassword"
                                onChange={handleInputChange}
                                placeholder="Confirm Password"
                            />
                        </TextField>
                        <Button className={classes.confirmBtn} type='submit' variant="outlined">Confirm</Button>
                    </form>
                </Paper>
            </SignupWrapper>
        </IndexWrapper>
    )
});