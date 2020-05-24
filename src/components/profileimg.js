import React from 'react';

import {graphql, useStaticQuery} from 'gatsby';
import Image from 'gatsby-image'

const ProfileImg = () => {

    const query = useStaticQuery(graphql`
    query {
        file(relativePath: { eq: "fede.png" }) {
          childImageSharp {
            fluid {
              srcSetWebp
            }
            }
          }
        }
    `)

    console.log(query);
    return ( 
        <>
            <h1>Componente imagen</h1>
            <Image fluid={query.file.childImageSharp.fluid.srcSetWebp} />
        </>
     );
}
 
export default ProfileImg;