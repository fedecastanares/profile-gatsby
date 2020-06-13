import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'gatsby';
import {Typography, Grid, Container, Button} from '@material-ui/core'
import ProfileImg from './profileimg.js'


const useStyles = makeStyles(theme => ({
    root: {height: '100%', paddingTop: '20vh'},
    typography: {
        color: 'white',
        fontSize: '1rem',
        paddingLeft: '5vw',
        [theme.breakpoints.up('sm')]: {
            padding: '1vh 0 1vh 0',
            fontSize: '1.6rem',
            paddingLeft: 0,
          },
    },
    name: {
        paddingLeft: '5vw',
        fontSize: '2rem',
        [theme.breakpoints.up('sm')]: {
            paddingLeft: 0,
            fontSize: '2.6rem',
          },
    },
    imagen: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'block'
      },
    }, 
    button: {
      fontWeight: 700,
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
              <Grid container justify='flex-end' style={{paddingTop: '2vh'}}>
                <Grid item>
                <Link to={'/portfolio'} style={{textDecoration: 'none',color: 'primary'}}>
                  <Button  className={classes.button} variant="outlined"  color='primary' >
                    Portfolio
                  </Button>
                </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <div className={classes.imagen}> 
                <ProfileImg size={{height: '45vh', width: '30vh'}}/>
              </div>
            </Grid>
          </Grid>
        </Container>
        </>
     );
}
 
export default WhoAmi;