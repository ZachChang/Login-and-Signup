import React from 'react';
import Link from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.bar} position="fixed">
            <Toolbar className={classes.toolbar}>
                <div>
                    <Link href='/'><Typography variant="h6">Collect Thought</Typography></Link>
                </div>
                <div>
                    <Link href='/login'><Button className={classes.hbtn} color="inherit">Log in</Button></Link>
                    <Link href='/signup'><Button className={classes.hbtn} color="inherit">Sign up</Button></Link>
                </div>
            </Toolbar>
        </AppBar>
    )
};

export default Header;