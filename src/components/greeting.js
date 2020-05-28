import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        height: '46vh',
        backgroundColor: theme.palette.secondary.main
    }
}));

const Greeting = () => {
    const classes = useStyles();
    return ( 
        <>
        <div className={classes.root}>

        </div>
        </>
     );
}
 
export default Greeting;