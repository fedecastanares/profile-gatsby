import React, {useState, useEffect} from 'react';
import { Grid, Typography, FormGroup, FormControlLabel, Checkbox, Button, Link } from '@material-ui/core';


const Filters = ({data, renderData, setRenderData}) => {
    const [state, setState] = useState({
        Alkosto: true,
        Farmashop: true,
        Creado: true,
        Fix: true,
      });

      const scenarioFilter = (expectedValue) => {
        var newData = ([...data.filter(scenario => scenario.Proyecto === expectedValue)])
        if (!state.Creado){
            newData = [...newData.filter(value => value.Tipo !== "Creacion")];
        }
        if (!state.Fix){
            newData = [...newData.filter(value => value.Tipo !== "Fix")];
        }
        if (!state.Creado && !state.Fix) {
            newData = []
        }
        setRenderData(newData);
      }

      useEffect(() => {
          if (state.Alkosto && state.Farmashop) {
            setRenderData(data)
          } else if (state.Alkosto) {
            scenarioFilter("Alkosto")
          } else if (state.Farmashop) {
            scenarioFilter("Farmashop")
          } else {
              setRenderData([])
          }
      }, [state])

      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      }; 

      
      
    return ( 
        <>
        <Grid container justify='space-around' spacing={3} style={{paddingTop: 20, paddingBottom: 20}}>
            <Grid item xs={4}>
                <a href="https://github.com/fedecastanares/profile-gatsby/blob/master/src/pages/geoworks.js" target="_blank" rel='noreferrer' style={{textDecoration: 'none',color: 'inherit'}}>
                    <Button variant="outlined" color="primary" fullWidth>
                        Ver repositorio de esta pagina
                    </Button>
                </a>
            </Grid>
            <Grid item xs={8}>
                <Grid container alignItems='center' justify='flex-end' spacing={3}>
                    <Grid item>
                        <Typography variant='body1' component='p'>
                            Filtros:
                        </Typography>
                    </Grid>
                    <Grid item>
                        <FormGroup row>
                            <FormControlLabel
                            control={<Checkbox checked={state.Alkosto} onChange={handleChange} name="Alkosto" color="primary" />}
                            label="Alkosto"
                            />
                            <FormControlLabel
                            control={<Checkbox checked={state.Farmashop} onChange={handleChange} name="Farmashop" color="primary" />}
                            label="Farmashop"
                            />
                            <FormControlLabel
                            control={<Checkbox checked={state.Creado} onChange={handleChange} name="Creado" color="primary" />}
                            label="Creado"
                            />
                            <FormControlLabel
                            control={<Checkbox checked={state.Fix} onChange={handleChange} name="Fix" color="primary" />}
                            label="Fix"
                            />
                        </FormGroup>
                    </Grid>
                    <Grid item>
                        <Typography variant='body1' component='p'>
                            Mostrando {renderData.length} scenarios
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </>
     );
}
 
export default Filters;