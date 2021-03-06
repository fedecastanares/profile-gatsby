import React from "react"
import Layout from '../components/layout.js'
import BackgroundImg from '../components/backgroundimg.js'
import Greeting from '../components/greeting.js'
import { Paper} from '@material-ui/core'
import WhoAmi from '../components/whoiam.js'
import Contact from '../components/contacto'



const IndexPage = () => (
  <>
    <Layout>
      <BackgroundImg>
        <WhoAmi/>
      </BackgroundImg>
      <Paper>
        <Greeting/>
        <Contact />
      </Paper>
    </Layout>
  </>
  
)

export default IndexPage
