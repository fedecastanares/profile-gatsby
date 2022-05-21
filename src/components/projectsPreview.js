import React from 'react';
import {graphql, useStaticQuery, Link} from 'gatsby';
import {Container, Grid, Typography, Button} from '@material-ui/core';
import Img from "gatsby-image";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: { 
        backgroundColor: theme.palette.secondary.main,
        minHeight: '95vh',
        color: 'white'
    },
}));

const ProjectsPreview = () => {
    const classes = useStyles();

    const projects = useStaticQuery(graphql`
    query {
        allDatoCmsPortfolio(filter: {id: {regex: "/-es/"}}) {
          nodes{
            titulo
            descripcion
            enlace
            slug
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
        <div className={classes.root}>
            <Container maxWidth='lg'>
                <Grid container justify='space-evenly' alignContent='flex-end' alignItems='flex-end' spacing={8} style={{paddingTop: '5vh'}}>
                    {projects.allDatoCmsPortfolio.nodes.map(project => {
                            return(
                                <Grid item xs={12} lg={4} style={{paddingTop: '3vh'}} key={project.titulo}>
                                  <Link to={project.slug} style={{
                                    textDecoration: 'none',
                                    color: 'inherit'
                                  }}>
                                    <Img
                                    fluid={project.imagen.fluid}
                                    alt='imagen del proyecto'
                                    style={{height: 'auto', width: '100%', borderRadius: "0.25rem"}}
                                    />
                                    <Grid container justify='space-between' alignContent='center' alignItems='center' spacing={2} style={{paddingTop: '2vh'}}>
                                      <Grid item xs={8}>
                                        <Typography variant='h5'>
                                          {project.titulo}
                                        </Typography>
                                      </Grid>
                                      <Grid item xs={4}>
                                        <Button variant="contained" color="primary" fullWidth>Ver</Button>
                                      </Grid>
                                    </Grid>
                                  </Link>
                                </Grid>
                                );
                    })}
                </Grid>
            </Container>
        </div>
        </>
     );
}
 
export default ProjectsPreview;