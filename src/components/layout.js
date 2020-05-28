import React from 'react';
import Header from './header.js';
import {Helmet} from 'react-helmet';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const Layout = (props) => {

  const theme = createMuiTheme({
    palette: {
      type:'dark' ,
      primary: {
        main: '#e17100',
      },
      secondary: {
        main: '#24292e'
      },
    }
  })

  return ( 
    <>
       <Helmet>
          <title>Federico Castañares</title>
          <meta name="description" content={'Sitio web de Federico Castañares, desarrollador web FullStack, MERN JAMStack'} />
        </Helmet>
      <ThemeProvider theme={theme}>
        <Header/>
        {props.children}
      </ThemeProvider>
    </>
   );
}
 
export default Layout;