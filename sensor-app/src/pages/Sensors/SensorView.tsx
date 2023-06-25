import React, { useReducer } from 'react';
import { useParams } from "react-router-dom";
import { Grid, Paper, TextField, Typography } from '@mui/material';
import { sensorData } from '../../data/sensorData';
import { sensorDataReducer, SensorDataReducerActionTypes } from '../../reducers/sensorDataReducer';

const SensorView = () => {
    const { id } = useParams();
    const [sensorDataState, dispatch] = useReducer(sensorDataReducer, sensorData[id as any]);
    console.log(sensorDataState)

    const onChangeData = (type:any, val:string) =>{
        dispatch(
            {
                type: type,
                payload: val
            }
        ); 
    };

    return (
    <Paper sx={{display: "flex", flexDirection: "column", justifyContent:"center", alignItems:"center", minHeight:"10em", margin: "10em 5em 5em 5em", padding:"1em", border: "1px solid black", borderRadius: "1em"}}>
        <Typography>Sensor Metadata</Typography>
        <Grid container spacing={0} sx={{width:"50em", height:"20em"}}> 
            <Grid item sm={12} sx={{display:"flex", justifyContent:"space-evenly", flexDirection:"row", alignItems:"center"}}>
                Sensor Name: <TextField placeholder="Name" value={sensorDataState.name} onChange={(e:any) => onChangeData(SensorDataReducerActionTypes.UPDATE_NAME, e.target.val)}/>
            </Grid>

            {/* <Grid item sm={12} sx={{display:"flex", justifyContent:"space-evenly", flexDirection:"row", alignItems:"center"}}>
                Location: <TextField placeholder="Location" value={sensorDataState.location} onChange={onChangeData}/>
            </Grid>

            <Grid item sm={12} sx={{display:"flex", justifyContent:"space-evenly", flexDirection:"row", alignItems:"center"}}>
                Coordinates: 
                <TextField placeholder="Latitude" value={sensorDataState.latitude} onChange={onChangeData}/>
                <TextField 
                    placeholder="Longitude" value={sensorDataState.longitude} 
                    // onChange={}
                />
            </Grid> */}
        </Grid>
    </Paper>
    )
}

export default SensorView