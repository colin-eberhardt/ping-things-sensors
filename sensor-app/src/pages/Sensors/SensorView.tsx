import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Card, Grid, Paper, TextField, Typography } from '@mui/material';
import { sensorData } from '../../data/sensorData';

const SensorView = () => {
    const { id } = useParams();
    const [sensor, setSensor] = useState(sensorData[id as any]);

    const onChangeData = (e:any) => {
        console.log(e.target.value)
    }  ; 


    return (
    <Paper sx={{display: "flex", flexDirection: "column", justifyContent:"center", alignItems:"center", minHeight:"10em", margin: "10em 5em 5em 5em", padding:"1em", border: "1px solid black", borderRadius: "1em"}}>
        <Typography>Sensor Metadata</Typography>
        <Grid container spacing={0} sx={{width:"50em", height:"20em"}}> 
            <Grid item sm={12} sx={{display:"flex", justifyContent:"space-evenly", flexDirection:"row", alignItems:"center"}}>
                Sensor Name: <TextField placeholder="Name" value={sensor.name} onChange={onChangeData}/>
            </Grid>

            <Grid item sm={12} sx={{display:"flex", justifyContent:"space-evenly", flexDirection:"row", alignItems:"center"}}>
                Location: <TextField placeholder="Location" value={sensor.location} onChange={onChangeData}/>
            </Grid>

            <Grid item sm={12} sx={{display:"flex", justifyContent:"space-evenly", flexDirection:"row", alignItems:"center"}}>
                Coordinates: 
                <TextField placeholder="Latitude" value={sensor.latitude} onChange={onChangeData}/>
                <TextField placeholder="Longitude" value={sensor.longitude} onChange={onChangeData}/>
            </Grid>
        </Grid>
    </Paper>
    )
}

export default SensorView