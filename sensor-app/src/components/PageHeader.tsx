import React, { useState } from 'react'
import { Box, AppBar, IconButton, Toolbar, Typography, Button, Drawer, Popover } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const PageHeader = () => {
    const [isDrawerVisible, setIsDrawerVisible] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const toggleDrawer = (prev:Boolean) => {setIsDrawerVisible(!prev)};
    const toggleModal = (prev:Boolean) => {setIsModalVisible(!prev)};


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
            <Toolbar>
                <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => toggleDrawer(isDrawerVisible)}
                >
                    <MenuIcon />
                    <Drawer
                        variant='temporary'
                        open={isDrawerVisible}
                        onClose={() => toggleDrawer(isDrawerVisible)}
                        >
                        {["Stuff", "More Stuff", "Even More Stuff"].map((item:string) => <li>{item}</li>)}
                    </Drawer>
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <span style={{color:"orange"}}>Ping</span><span style={{color:"darkgrey"}}>Things</span>
                </Typography>
                <Button color="inherit" onClick={() => toggleModal(isModalVisible)}>Login</Button>
                <Popover
                    open={isModalVisible}
                    onClose={() => toggleModal(isModalVisible)}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <li>Account</li>
                    <li>Seettings</li>
                    <li>Logout</li>
                </Popover>
            </Toolbar>
            </AppBar>        
        </Box>
    )
}

export default PageHeader