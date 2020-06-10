import React from 'react';
import {graphql, Link} from 'gatsby';
import {Typography, Grid, Container, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/layout.js';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Img from "gatsby-image";

const useStyles = makeStyles(theme => ({
    root: { 
        backgroundColor: '#24292e',
        minHeight: '92vh',
        color: 'white',
    },
    tittle: {
        fontSize: '1.8rem',
        [theme.breakpoints.up('sm')]: {
            fontSize: '3.6rem',
        },
    }
}));

export const query = graphql`
    query($slug: String!) {
        allDatoCmsPortfolio(filter: { slug: {eq: $slug} }) 
            {
                nodes{
                    titulo
                    descripcion
                    enlace
                    repositorio
                    imagen {
                        fluid {
                            ...GatsbyDatoCmsFluid
                            }
                        }
                    }
                }
            }
`

const ProjectTemplate = ({data: {allDatoCmsPortfolio : { nodes }}}) => {

    const classes = useStyles();

    const {titulo,
        descripcion,
        enlace,
        imagen,
        repositorio } = nodes[0];

    
    return ( 
        <>
        <Layout>
            <div className={classes.root}>
            <Grid container justify='flex-start' alignItems='flex-end' alignContent='flex-end' style={{padding: '3vh'}} >
                <Grid item>
                    <Link to='/portfolio' style={{textDecoration: 'none',color: 'inherit'}}>
                        <ArrowBackIcon color='primary' className={classes.tittle} />
                    </Link>
                </Grid>
                <Grid item style={{paddingLeft: '2vh'}}>
                    <Typography className={classes.tittle} variant='h3'>{titulo}</Typography>
                </Grid>
            </Grid>
            <Container >
                <Grid container justify='space-around' alignItems='center' alignContent='center' spacing={2} >
                    <Grid item xs={12} lg={6}>
                        <Img
                        fluid={imagen.fluid}
                        alt='imagen del proyecto'
                        style={{height: 'auto', width: '100%'}}
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}> 
                        <Typography variant='body1'>
                            {descripcion}
                        </Typography>
                        <Grid container spacing={2} style={{paddingTop: '2vh'}} justify='space-evenly'>
                            <Grid item xs={6}>
                                <a href={repositorio} target="_blank" rel='noreferrer' style={{textDecoration: 'none',color: 'inherit'}}><Button color='primary' variant="outlined" fullWidth>Ver repo</Button></a>
                            </Grid>
                            <Grid item xs={6}>
                                <a href={enlace} target="_blank" rel='noreferrer' style={{textDecoration: 'none',color: 'inherit'}}><Button color='primary' variant="contained" fullWidth>Ver app</Button></a>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            </div>
        </Layout>
        </>
     );
}
 
export default ProjectTemplate;