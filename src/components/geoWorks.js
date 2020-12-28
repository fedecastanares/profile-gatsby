import React from 'react';
import Doughnuts from '../components/doughnuts'
import ScenarioDetail from '../components/scenarioDetail'

import { makeStyles } from '@material-ui/core/styles';
import {Container} from '@material-ui/core'
import data from '../data.json'
import {doughtnutPropierties} from './doughnutConfig'

const useStyles = makeStyles(theme => ({
    root: { 
        backgroundColor: theme.palette.secondary.main,
        minHeight: '90.9vh',
        color: 'white'
    },
    container: {paddingTop: 50, paddingBottom: 50,}
}));


const GeoWorks = () => {
    const classes = useStyles();
    return ( 
        <>
            <div className={classes.root}>
                <Container className={classes.container}>
                    <Doughnuts
                    doughnut={doughtnutPropierties(data)}
                    />
                    <ScenarioDetail
                    data={data.reverse()}
                    />
                </Container>
           </div>
        </>
     );
}
 
export default GeoWorks;