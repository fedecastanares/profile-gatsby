import React from 'react';
import {Link} from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    nav: {
        display: 'flex',
        justifyContent: 'center',
        padding: 0,
        [theme.breakpoints.up('sm')]: {
            padding: '1vh',
          },
    }, navitem: {
        color: 'white',
        fontSize: '1rem',
        fontWeight: 700,
        lineHeight: '1rem',
        textDecoration: 'none',
        padding: '0.4rem',
        marginRight: '0.6rem',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.6rem',
            padding: '1rem',
          },
    },
    navitemActive: {
        color: '#e17100',
        borderBottom: '2px solid #e17100'
    }
}))

const Navegacion = () => {
    const classes = useStyles();
    return ( 
        <nav className={classes.nav}>
            <Link className={classes.navitem} activeClassName={classes.navitemActive} to={'/'}>Inicio</Link>
            <Link className={classes.navitem} activeClassName={classes.navitemActive} to={'/portfolio'}>Portfolio</Link>
        </nav>
     );
}
 
export default Navegacion;