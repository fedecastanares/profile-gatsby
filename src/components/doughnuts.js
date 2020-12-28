import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Slider from 'infinite-react-carousel';
import { Typography } from '@material-ui/core';

const Doughnuts = ({doughnut}) => {

    return ( 
        <>
            <Slider dots autoplay overScan={0}>
                {doughnut.map(doughnutView => (
                    <div key={doughnutView.name}>
                        <Typography variant="h3" component="h3" align='center' style={{paddingBottom: 20,}}>
                            {doughnutView.name}
                        </Typography>
                        <Doughnut
                            width={3}
                            height={1}
                            data={doughnutView}
                            />
                    </div>
                ))}
            </Slider>
        </>
     );
}
 
export default Doughnuts;