import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {Container, Grid, Typography} from '@material-ui/core';
import Img from "gatsby-image";

const Projects = () => {

    const projects = useStaticQuery(graphql`
    query {
        allDatoCmsPortfolio {
          nodes{
            titulo
            descripcion
            enlace
            imagen {
              fluid {
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      
      }
    `);
    return ( 
        <>
            <Container>
                <Grid container justify='space-evenly' alignContent='center' alignItems='center' spacing={2}>
                    {projects.allDatoCmsPortfolio.nodes.map(project => {
                        console.log(project);
                            return(
                                <Grid item key={project.titulo} xs={12} lg={4}>
                                    <Img
                                    fluid={project.imagen.fluid}
                                    alt='imagen del proyecto'
                                    style={{height: 'auto', width: '100%'}}
                                    />
                                    <Typography variant='h5'>
                                        {project.titulo}
                                    </Typography>
                                </Grid>
                                );
                    })}
                </Grid>
            </Container>
        </>
     );
}
 
export default Projects;