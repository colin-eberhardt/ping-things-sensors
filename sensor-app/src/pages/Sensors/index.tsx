import React, { useState } from 'react';
import { Paper, TableContainer, Table, TableRow, TableCell, TableHead, TableBody, Button, Modal, Box, TextField, Typography, Alert, AlertColor, IconButton, Fab } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import EditIcon from "@mui/icons-material/Edit";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';

function createData(
    id: string,
    name: string,
    location: string,
    coords: string,
    tags: string[],
    issue: string,
    favorite: boolean
  ) {
    return { id, name, location, coords, tags, issue, favorite };
  }

const rows = [
    createData('1', 'Sensor 1', "New York, New York", "40.7128° N, 74.0060° W", ["foo", "bar", "baz"], "error", true),
    createData('2', 'Sensor 2', "Alexandria, Virginia", "38.8048° N, 77.0469° W", ["some", "other", "tag"], "warning", true),
    createData('3', 'Sensor 3', "Los Angeles, California", "34.0522° N, 118.2437° W", ["foo", "tag"], "success", false),
    createData('4', 'Sensor 4', "Dallas, Texas", "32.7767° N, 96.7970° W", ["tag"], "success", false),
    createData('5', 'Sensor 5', "Philadelphia, Pennsylvania", "39.9526° N, 75.1652° W", ["some", "tag"], "warning", false),
  ];

interface IEditModal {
  isOpen: boolean;
  toggleModal: (prev:boolean) => void;
}

interface IKeyMap {
  [issue: string]: string;
};

const messageMap:IKeyMap = {
  "success": "No issues",
  "warning": "Sensor experiencing issues",
  "error": "Sensor error"
};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const EditModal = ({isOpen, toggleModal}:IEditModal) => {
  return (
    <Modal
      open={isOpen}
      onClose={toggleModal}
    >
        <Box sx={{ ...style, width: 400 }}>
          <Typography>Edit Sensor Metadata Below</Typography>
          <TextField label="Sensor Name" disabled={true}/>
          <p id="parent-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </Box>
    </Modal>
  )
};

const Sensors = () => {

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
                {rows.map((row) => (
                <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">{row.name}</TableCell>
                    <TableCell align="center">{row.tags}</TableCell>
                    <TableCell align="center">{row.location}</TableCell>                    
                    <TableCell align="center" sx={{width:"20em"}}><Alert severity={row.issue as AlertColor}>{messageMap[row.issue]}</Alert></TableCell>
                    <TableCell align="center">
                      {/* Update Link style */}
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
        <EditModal isOpen={showMoodal} toggleModal={toggleModal}/>
    </> 
  )
}

export default Sensors