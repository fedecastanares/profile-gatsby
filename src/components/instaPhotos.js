import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image'

import {Grid} from '@material-ui/core';

const InstaPhotos = () => {

     const image = useStaticQuery(graphql`
     query {
        allInstaNode (sort: { fields: timestamp, order: DESC }, limit: 30) {
          edges {
            node {
              id
              likes
              comments
              mediaType
              preview
              original
              timestamp
              caption
              localFile {
                childImageSharp {
                  fluid(quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    `); 

    console.log(image.allInstaNode.edges)
    return ( 
    <>
    <Grid container>
    {image.allInstaNode.edges.map(imagen => {
            if (imagen.node.mediaType === "GraphImage") {
                    return(
                        <Grid item xs={12} lg={4}>
                            <Img fluid={imagen.node.localFile.childImageSharp.fluid} alt="imagen de instagram" style={{heigth: 'auto', witdh: '100%'}}/> 
                        </Grid>
                    )
                }
            }    
        )}
    </Grid>
    </>
     );
}
 
export default InstaPhotos;