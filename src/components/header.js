import React from 'react';
import Navegacion from './nav.js';

import {Typography, Container} from '@material-ui/core'

const Header = () => {
    return ( 
        <>
            <Container>
                <Typography>Header</Typography>
                <Navegacion/>
            </Container>
            
        </>
     );
}
 
export default Header;