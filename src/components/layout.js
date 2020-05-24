import React from 'react';

import Header from './header.js'

const Layout = (props) => {
  return ( 
    <>
      <Header/>
      {props.children}
    </>
   );
}
 
export default Layout;