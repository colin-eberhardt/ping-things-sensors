import React, { useContext } from 'react';
import { Link, useParams } from "react-router-dom";
import  get from "get-value";
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { SensorDataReducerActionTypes } from '../../reducers/sensorDataReducer';
import SensorContext from '../../context/SensorContext';


const SensorView = () => {
    const { id } = useParams();
    const { sensorsState, dispatch} = useContext(SensorContext);

    const editableFields = ["Name", "Location", "Latitude", "Longitude"];

    const fieldToActionTypeMap = (field:string) => {
        switch(field){
            case "Name":
                return SensorDataReducerActionTypes.UPDATE_NAME;
            case "Location":
                return SensorDataReducerActionTypes.UPDATE_LOCATION;
            case "Latitude":
                return SensorDataReducerActionTypes.UPDATE_LATITUDE;
            case "Longitude":
                return SensorDataReducerActionTypes.UPDATE_LONGITUDE;
            default:
                return SensorDataReducerActionTypes.UPDATE_NAME
        }
    };

    return (
    <Paper sx={{display: "flex", flexDirection: "column", justifyContent:"center", alignItems:"center", minHeight:"10em", margin: "10em 5em 5em 5em", padding:"1em", border: "1px solid black", borderRadius: "1em"}}>
        <Typography>Sensor Metadata</Typography>
        <Grid container spacing={0} sx={{width:"50em", height:"20em"}}>
            {editableFields.map((field:string) => {
                return (
                    <Grid key={field} item sm={12} sx={{display:"flex", justifyContent:"space-evenly", flexDirection:"row", alignItems:"center"}}>
                        <Typography>{field}:</Typography> 
                        <TextField placeholder="Name"  value={get(sensorsState, `${id}.${field.toLowerCase()}`)} onChange={(e:any) => dispatch({type: fieldToActionTypeMap(field), id: id, payload: e.target.value})}/>
                    </Grid>  
                )   
            })}
        </Grid>
        <Link to={"/sensors"}>
            <Button>Enter</Button>
        </Link>
    </Paper>
    )
}

export default SensorView