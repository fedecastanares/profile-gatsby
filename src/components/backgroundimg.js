import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import BackgroundImagen from 'gatsby-background-image';


const ImagenFondo = (props) => {

    const image = useStaticQuery(graphql`
    query {
        file(relativePath: { eq: "fondo.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
            }
          }
        }
    `);

    return ( 
        <BackgroundImagen 
            Tag={'section'} 
            fluid={image.file.childImageSharp.fluid}>
                <div style={{height: '45vh'}}>
                    {props.children}
                </div>
        </BackgroundImagen>
     );
}
 
export default ImagenFondo;