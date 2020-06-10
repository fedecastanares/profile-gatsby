import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Grid, Container} from '@material-ui/core'
import ProfileImg from './profileimg.js'


const useStyles = makeStyles(theme => ({
    root: {height: '100%', paddingTop: '20vh'},
    typography: {
        color: 'white',
        fontSize: '1rem',
        marginLeft: '5vh',
        [theme.breakpoints.up('sm')]: {
            padding: '1vh 0 1vh 0',
            fontSize: '1.6rem',
            marginLeft: 0,
          },
    },
    name: {
        marginLeft: '5vh',
        fontSize: '2rem',
        [theme.breakpoints.up('sm')]: {
            marginLeft: 0,
            fontSize: '2.6rem',
          },
    }
    

}));

const WhoAmi = () => {
    const classes = useStyles();

    return ( 
        <>
        <Container className={classes.root}>
          <Grid container justify='space-evenly' alignContent='center' alignItems='center' style={{height: '100%'}}>
            <Grid item style={{paddingBottom: '15vh'}}>
              <Typography className={classes.name} color='primary' variant="h3" gutterBottom>
              Federico Castañares
              </Typography>
              <Typography className={classes.typography} variant="h4" gutterBottom>
              Desarrollador FullStack
              </Typography>
              <Typography className={classes.typography} variant="h5" gutterBottom>
              Email: federico.castanares@gmail.com
              </Typography>
            </Grid>
            <Grid item>
              {window.innerWidth > 768 ? <ProfileImg size={{height: '45vh', width: '30vh'}}/> : null}
            </Grid>
          </Grid>
        </Container>
        </>
     );
}
 
export default WhoAmi;