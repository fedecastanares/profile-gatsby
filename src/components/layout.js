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
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Helvetica',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  })

  return ( 
    <>
       <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500" rel="stylesheet"></link>
        </Helmet>
      <ThemeProvider theme={theme}>
        <Header/>
        {props.children}
      </ThemeProvider>
    </>
   );
}
 
export default Layout;