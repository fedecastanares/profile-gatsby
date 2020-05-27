import React from "react"
import Layout from '../components/layout.js'
import BackgroundImg from '../components/backgroundimg.js'
import {Typography} from '@material-ui/core'


const IndexPage = () =>  (
  <>
    <Layout>
      <BackgroundImg>
        <Typography 
          style={{color: 'white'}}
          variant="h5" 
          gutterBottom>
          Contenido
        </Typography>
      </BackgroundImg>
    </Layout>
  </>
  
)

export default IndexPage
