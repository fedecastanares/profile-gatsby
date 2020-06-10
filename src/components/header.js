import React from 'react';
import Navegacion from './navegacion.js';
import {Link} from 'gatsby'

import {Typography, Container, Grid, Toolbar, AppBar} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: theme.palette.secondary.main,
      padding: '2vh 0 2vh 0',
      [theme.breakpoints.up('sm')]: {
        padding: '1vh 0 1vh 0',
      },
    },
    header: {
        color: 'white',
        textAlign: 'start',
        paddingTop: '1vh',
        fontSize: '1.2rem',
        fontFamily: 'Oleo Script, cursive',
        [theme.breakpoints.up('sm')]: {
            paddingTop: 0,
            fontSize: '1.6rem',
          },
    }
   }))


const Header = () => {
    const classes = useStyles();
    return ( 
            <AppBar position="sticky" color='inherit' className={classes.root}>
                <Toolbar>
                    <Container>
                        <Grid container justify='space-between' alignContent='center' alignItems='center'>
                            <Grid item xs={8} lg={8}>
                                <Link to='/' style={{textDecoration: 'none',color: 'inherit'}}>
                                    <Typography 
                                    className={classes.header}
                                    variant="h5" 
                                    gutterBottom>
                                    Federico Castañares
                                    </Typography>
                                </Link>
                            </Grid>
                            <Grid item xs={4} lg={4}>
                                <Navegacion/>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
            );
}
 
export default Header;