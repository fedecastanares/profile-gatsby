import React from "react"
import Layout from '../components/layout.js'
import BackgroundImg from '../components/backgroundimg.js'
import ProfileImg from '../components/profileimg.js'
import Greeting from '../components/greeting.js'
import {Typography, Grid, Container, Paper} from '@material-ui/core'


const IndexPage = () =>  (
  <>
    <Layout>
      <BackgroundImg>
        <Container style={{height: '100%', paddingTop: '20vh'}}>
          <Grid container justify={window.innerWidth > 768 ? 'space-evenly' : 'center'} alignContent='center' alignItems='center' style={{height: '100%'}}>
            <Grid item style={{paddingBottom: '15vh'}}>
              <Typography color='primary' variant="h3" gutterBottom>
              Federico Castañares
              </Typography>
              <Typography style={{color: 'white'}} variant="h4" gutterBottom>
              Desarrollador FullStack
              </Typography>
              <Typography style={{color: 'white'}} variant="h5" gutterBottom>
              Edad: 25 años
              </Typography>
              <Typography style={{color: 'white'}} variant="h5" gutterBottom>
              Email: federico.castanares@gmail.com
              </Typography>
            </Grid>
            <Grid item>
              {window.innerWidth > 768 ? <ProfileImg size={{height: '45vh', width: '30vh'}}/> : null}
            </Grid>
          </Grid>
        </Container>
      </BackgroundImg>
      <Paper>
        <Greeting/>
      </Paper>
    </Layout>
  </>
  
)

export default IndexPage
