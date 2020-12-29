import React, {useState} from 'react'; 
import { makeStyles } from '@material-ui/core/styles';
import {ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Grid, Chip, Typography } from '@material-ui/core';
import { ExpandMore, CheckCircle, Error } from '@material-ui/icons';
import Filters from './filters'

const useStyles = makeStyles((theme) => ({
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }));
  

const ScenarioDetail = ({data}) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);  
    const [renderData, setRenderData] = useState(data);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
    <Filters data={data} renderData={renderData} setRenderData={setRenderData} />
    {renderData.map((scenario, i) => (
        <ExpansionPanel key={i} expanded={expanded === `panel${i + 1}`} onChange={handleChange(`panel${i + 1}`)} TransitionProps={{ unmountOnExit: true }}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                <Grid container justify='space-between'>
                    <Grid item xs={12} sm={10}>
                        <Typography variant='body1' component='p' className={classes.heading}>{scenario.Scenario}</Typography>
                    </Grid>
                    <Grid item xs={6} sm={1}>
                        <Typography variant='body1' component='p' className={classes.secondaryHeading}>{scenario.Proyecto}</Typography>
                    </Grid>
                    <Grid item xs={6} sm={1}>
                        <Chip 
                        size="small"
                        icon={scenario.Tipo === "Creacion" ? <CheckCircle /> : <Error />}
                        label={scenario.Tipo} 
                        color='primary'
                        />
                    </Grid>
                </Grid>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                {scenario.Descripcion}
            </ExpansionPanelDetails>
        </ExpansionPanel>
    ))}
    </>
  );
}
 
export default ScenarioDetail;
