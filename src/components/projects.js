import React from 'react';
import {graphql, Link} from 'gatsby';
import {Typography, Grid, Container} from '@material-ui/core';
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
        fontSize: '2rem',
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
        imagen } = nodes[0];
    return ( 
        <>
        <Layout>
            <div className={classes.root}>
            <Grid container justify='flex-start' alignItems='center' alignContent='center' style={{padding: '5vh'}} >
                <Grid item xs={1}>
                    <Link to='/portfolio' style={{textDecoration: 'none',color: 'inherit'}}>
                        <ArrowBackIcon color='primary' fontSize='large' />
                    </Link>
                </Grid>
                <Grid item xs={11} style={{paddingLeft: '4vh'}}>
                    <Typography className={classes.tittle} variant='h3'>{titulo}</Typography>
                </Grid>
            </Grid>
            <Container >
                <Grid container justify='space-around' alignItems='center' alignContent='center' spacing={2} style={{paddingTop: '5vh'}}>
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
                        <p>{enlace}</p>
                    </Grid>
                </Grid>
            </Container>
            </div>
        </Layout>
        </>
     );
}
 
export default ProjectTemplate;