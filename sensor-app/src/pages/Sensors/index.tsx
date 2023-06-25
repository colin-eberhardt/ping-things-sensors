import React from 'react';
import { Paper, TableContainer, Table, TableRow, TableCell, TableHead, TableBody, Alert, AlertColor, IconButton, Fab } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import EditIcon from "@mui/icons-material/Edit";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import { sensorData } from '../../data/sensorData';

interface IKeyMap {
  [issue: string]: string;
};

const messageMap:IKeyMap = {
  "success": "No issues",
  "warning": "Sensor experiencing issues",
  "error": "Sensor error"
};

const Sensors = () => {
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
                {sensorData.map((row) => (
                <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">{row.name}</TableCell>
                    <TableCell align="center">{row.tags}</TableCell>
                    <TableCell align="center">{row.location}</TableCell>                    
                    <TableCell align="center" sx={{width:"20em"}}><Alert severity={row.issueMsg as AlertColor}>{messageMap[row.issueMsg]}</Alert></TableCell>
                    <TableCell align="center">
                      <Link to={`/sensors/${row.id}`}>
                        <Fab size="small"  aria-label="edit" variant='extended' sx={{backgroundColor: "white", color:"orange", boxShadow:"none"}}>
                          <EditIcon sx={{paddingRight:"5px"}}/> 
                          Edit
                        </Fab>
                      </Link>
                      <Fab size="small" aria-label="edit" variant='extended' sx={{backgroundColor: "white", color:"orange", boxShadow:"none"}}>
                          <VisibilityOffIcon sx={{paddingRight:"5px"}}/> 
                          Hide
                      </Fab>
                      <IconButton 
                        sx={{color: row.favorite ? "orange" : "lightgrey"}}
                      >
                        {row.favorite ? <StarIcon/> : <StarBorderIcon/>}
                      </IconButton>
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    </> 
  )
}

export default Sensors