import React from "react"
import Layout from '../components/layout.js'
import ProfileImg from '../components/profileimg.js'
import {Typography} from '@material-ui/core'


const IndexPage = () =>  (
  <>
    <Layout>
      <ProfileImg>
        <Typography 
          style={{color: 'white'}}
          variant="h5" 
          gutterBottom>
          Contenido
        </Typography>
      </ProfileImg>
    </Layout>
  </>
  
)

export default IndexPage
