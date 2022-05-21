import React, {useState} from 'react';

import {TextField, Typography, Grid, Container, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Alert from './alert'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.secondary.main
    },
    container: {
        paddingTop: '5vh', 
        paddingBottom: '2vh'
    },
}))

const Contacto = () => {
    const classes = useStyles();
    const [status, setStatus] = useState("")

    const submitForm = (ev) => {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
            setStatus("SUCCESS");
          } else {
            setStatus("ERROR");
          }
        };
        xhr.send(data);
    }
    return ( 
    <>
    <div className={classes.root}>
        <Container className={classes.container} maxWidth='sm'>
            <form onSubmit={submitForm} action="https://formspree.io/f/mnqowqqg" method="POST" >
                <Grid container justify='center' spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant='h5' gutterBottom style={{textAlign:'center'}}>¿Cómo puedo ayudarte?</Typography>
                    </Grid>
                    <Grid item xs={12} >
                        <TextField id="name" label="Nombre" variant="outlined"  fullWidth/>
                    </Grid>
                    <Grid item xs={12} >
                        <TextField id="email" label="Email" variant="outlined" name="email" type='email'  fullWidth/>
                    </Grid>
                    <Grid item xs={12} >
                        <TextField id="menssage" label="Mensaje" variant="outlined" name="message" multiline rows={3} fullWidth/>
                    </Grid>
                    <Grid item xs={12} >
                        <Button color='primary' variant='contained' type="submit" fullWidth>Enviar</Button>
                    </Grid>
                    <Alert status={status} />
                </Grid>
            </form>
        </Container>
    </div>
    </> );
}
 
export default Contacto;