import React from 'react';
import Header from './header.js';
import {Helmet} from 'react-helmet';


const Layout = (props) => {
  return ( 
    <>
       <Helmet>
          <title>Federico Castañares</title>
          <meta name="description" content={'Sitio web de Federico Castañares, desarrollador web FullStack, MERN JAMStack'} />
        </Helmet>
      <Header/>
      {props.children}
    </>
   );
}
 
export default Layout;