import React from 'react';
import Navegacion from './nav.js';

import {Typography, Container, Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: '#24292e',
      padding: '2vh 0 2vh 0'
    },
    header: {
        color: 'white',
        textAlign: 'center',
        paddingTop: '1vh',
        [theme.breakpoints.up('sm')]: {
            paddingTop: 0,
            textAlign: 'start'
          },
    }
   }))


const Header = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
            <Container>
                <Grid container justify='space-between' alignContent='center' alignItems='center'>
                    <Grid item xs={12} lg={8}>
                    <Typography 
                        className={classes.header}
                        variant="h5" 
                        gutterBottom>
                        Federico Castañares
                    </Typography>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Navegacion/>
                    </Grid>
                </Grid>
            </Container>
            
        </div>
     );
}
 
export default Header;