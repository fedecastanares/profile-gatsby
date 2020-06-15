import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import BackgroundImagen from 'gatsby-background-image';


const ImagenFondo = (props) => {

    const image = useStaticQuery(graphql`
    query {
        file(relativePath: { eq: "fondo.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920 )  {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
            }
          }
        }
    `);

    return ( 
        <BackgroundImagen 
            Tag={'section'} 
            fluid={image.file.childImageSharp.fluid}
            style={{backgroundColor: '#2b2b2b'}}>
                <div style={{height: '82vh'}}>
                    {props.children}
                </div>
        </BackgroundImagen>
     );
}
 
export default ImagenFondo;