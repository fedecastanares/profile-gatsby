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
                <Typography variant="h4" gutterBottom>Hola! <span role="img" aria-label="Waving Hand">👋</span></Typography >
                <Typography className={classes.about} variant="body1" gutterBottom>Soy desarrollador Web, desde tecnologias como jQuery<span role="img" aria-label="Old Man">👴</span> hasta modernas como Gatsby (Este sitio esta hecho con Gatsby <span role="img" aria-label="Smiling Face with Sunglasses">😎</span>). </Typography>
                <Typography className={classes.about} variant="body1" gutterBottom>Comence con el bachillerato tecnologico y luego fui hacia la ruta web, especializandome en interfaces con React <span role="img" aria-label="Atom Symbol">⚛️</span>. </Typography>
                <Typography className={classes.about} variant="body1" gutterBottom><br/><span style={{fontStyle: 'italic', fontWeight: 400}}>Disfruta del camino.</span></Typography>
            </Container>
        </div>
        </>
     );
}
 
export default Greeting;