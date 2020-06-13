import React from 'react';
import Img from "gatsby-image";
import {graphql, useStaticQuery} from 'gatsby'

const ProfileImg = props => {

    const {size} = props
    const image = useStaticQuery(graphql`
    query {
        file(relativePath: { eq: "fede.png" }) {
          childImageSharp {
            fluid
            {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
            }
          }
        }
    `);

    return ( 
        <>
            <Img
            fluid={image.file.childImageSharp.fluid}
            alt="imagen"
            style={{height: size.height, width: size.width, borderRadius: '5%'}}
            />
        </>
     );
}
 
export default ProfileImg;

/*
 */