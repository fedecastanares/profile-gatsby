import React from 'react';
import {Alert} from '@material-ui/lab'

const MyAlert = ({status}) => {

    return ( 
        <>
            {status !== "" ? 
                <Alert className="animate__animated animate__fadeIn" severity={status.toLowerCase()} style={{marginTop: '3vh'}}>
                    {status === 'SUCCESS' ? 'Enviado' : 'No se pudo enviar el correo'}
                </Alert>
                : 
                <div id="mensaje" style={{height: "48px",  marginTop: '3vh', backgroundColor: 'red', color: "white"}}>
                    
                </div>
                }
        </>
     );
}
 
export default MyAlert;