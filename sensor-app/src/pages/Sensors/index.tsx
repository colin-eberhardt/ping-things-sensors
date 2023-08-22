import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Paper, TableContainer, Table, TableRow, TableCell, TableHead, TableBody, Button, Modal, Box, TextField, Typography, Alert, AlertColor, IconButton, Fab, Chip } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { ISensorDataItem, sensorData } from '../../data/sensorData';
import SensorContext from '../../context/SensorContext';
import { sensorDataReducer, SensorDataReducerActionTypes } from '../../reducers/sensorDataReducer';
import { type } from 'os';

interface IEditModal {
  isOpen: boolean;
  sensorInfo: ISensorDataItem;
  toggleModal: (prev:boolean) => void;
  dispatch: any;
}

interface IKeyMap {
  [issue: string]: string;
};

const messageMap:IKeyMap = {
  "success": "No issues",
  "warning": "Sensor experiencing issues",
  "error": "Sensor error"
};

const Sensors = () => {
  const { sensorsState, dispatch } = useContext(SensorContext)
  const [showMoodal, setShowModal] = useState(false);

  const toggleModal = (prev:boolean) => setShowModal(!prev)


  return (
   <>
        <h1>Sensors</h1>
        <TableContainer component={Paper}>
            <Table sx={{ mindWidth: 650, margin:"2em" }} aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell>Sensor</TableCell>
                <TableCell align="center">Tags</TableCell>
                <TableCell align="center">Location</TableCell>
                <TableCell align="center">Alerts</TableCell>
                <TableCell align="center">Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {sensorsState.map((row:ISensorDataItem) => (
                  <>
                    <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                          <Link to={`/sensors/${row.id}`}>{row.name}</Link>
                        </TableCell>
                        <TableCell align="center">
                          {row.tags.map((tag:string) => <Chip label={tag} /> )}
                        </TableCell>
                        <TableCell align="center">{row.location}</TableCell>                    
                        <TableCell align="center" sx={{width:"20em"}}><Alert severity={row.issueMsg as AlertColor}>{messageMap[row.issueMsg]}</Alert></TableCell>
                        <TableCell align="center">
                          <Link to={`/sensors/${row.id}/edit`}>
                            <Fab size="small"  aria-label="edit" variant='extended' sx={{backgroundColor: "white", color:"orange", boxShadow:"none"}} onClick={() => toggleModal(showMoodal)}>
                              <EditIcon sx={{paddingRight:"5px"}}/> 
                              Edit
                            </Fab>
                          </Link>
                          <IconButton 
                            sx={{color: row.favorite ? "orange" : "lightgrey"}}
                            onClick={() => dispatch({type: SensorDataReducerActionTypes.UPDATE_FAVORITE, id: row.id, payload: !row.favorite})}
                          >
                            {row.favorite ? <StarIcon/> : <StarBorderIcon/>}
                          </IconButton>
                        </TableCell>
                    </TableRow>
                  </>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
        <Link to={'/sensors/add'}>
          <Fab variant='extended'>
            <AddIcon/>
            Add Sensor
          </Fab>
        </Link>
    </> 
  )
}

export default Sensors