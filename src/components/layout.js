import React from 'react';
import Header from './header.js';
import {Helmet} from 'react-helmet';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import useSeo from '../hooks/use-seo.js';

const Layout = (props) => {

  const SEO = useSeo();
  const {fallbackSeo: {description, title}} = SEO

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
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>
      <ThemeProvider theme={theme}>
        <Header/>
        {props.children}
      </ThemeProvider>
    </>
   );
}
 
export default Layout;