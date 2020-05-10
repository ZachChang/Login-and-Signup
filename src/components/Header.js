import React from 'react';
import Link from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import headerHandler from '../handler/headerHandler';

const useStyles= makeStyles(() => ({
    bar: {
        backgroundColor: 'white',
        color: 'gray'
    },
    toolbar: {
      justifyContent: 'space-between',
      paddingRight: '50px',
      paddingLeft: '50px'
    },
    hbtn: {
      paddingLeft: '30px',
      paddingRight: '30px',
      textTransform: 'none',
      fontSize: '16px;'
    }
}));

export default headerHandler(props => {
    const classes = useStyles();
    const { openSignupPopup, openLoginPopup } = props;

    return (
        <AppBar className={classes.bar} position="relative">
            <Toolbar className={classes.toolbar}>
                <div>
                    <Link href='/'><Typography variant="h6">Member System</Typography></Link>
                </div>
                <div>
                    <Button onClick={openLoginPopup} className={classes.hbtn} color="inherit">Log in</Button>
                    <Button onClick={openSignupPopup} className={classes.hbtn} color="inherit">Sign up</Button>
                </div>
            </Toolbar>
        </AppBar>
    )
});