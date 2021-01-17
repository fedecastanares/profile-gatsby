import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Container} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '46vh',
        backgroundColor: theme.palette.secondary.main
    },
    container: {
        paddingTop: '15vh',
        paddingBottom: '5vh',
    },
    about: {
        fontSize: '1.2rem',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.4rem',
        }
    }

}));

const Greeting = () => {
    const classes = useStyles();
    return ( 
        <>
        <div className={classes.root}>
            <Container className={classes.container} maxWidth='sm'>
                <Typography variant="h4" gutterBottom>Hola!</Typography >
                <Typography className={classes.about} variant="body1" gutterBottom>Soy desarrollador Web FullStack, desde tecnologias como jQuery hasta modernas como lo es MERN stack</Typography>
                <Typography className={classes.about} variant="body1" gutterBottom>Actualmente estoy comenzando a ver React Native </Typography>
                <br/>
                <Typography className={classes.about} variant="body1" gutterBottom>Trabajo en Geocom Uruguay en el equipo de QA automation con Java como lenguaje y Selenium como herramienta</Typography>
                <br/>
                <Typography className={classes.about} variant="body1" gutterBottom>En mi tiempo libre juego al Basquet y videojuegos</Typography>
            </Container>
        </div>
        </>
     );
}
 
export default Greeting;