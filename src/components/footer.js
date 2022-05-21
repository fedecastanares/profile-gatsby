import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, IconButton } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GithubIcon from '@material-ui/icons/Github';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.secondary.main,
        color: "#fff",
        paddingBottom: "2rem"
    },
    icon: {
        marginLeft: "1rem"
    }
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container justify="center">
            <a href="https://www.linkedin.com/in/federico-casta%C3%B1ares-992a0512b/"><Grid item><IconButton><LinkedInIcon /></IconButton></Grid></a>
            <a href="https://www.instagram.com/fedecastanares/"><Grid item className={classes.icon}><IconButton><InstagramIcon /></IconButton></Grid></a>
            <a href="https://github.com/fedecastanares"><Grid item className={classes.icon}><IconButton><GithubIcon /></IconButton></Grid></a>
            </Grid>
        </div>
    );
}

export default Footer;