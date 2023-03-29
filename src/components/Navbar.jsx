import React, {useState} from "react";

import { 
    LightModeOutlined,
    DarkModeOutlined,
    Menu as MenuIcon, 
    Search,
    SettingsOutlined,
    ArrowDropDownOutlined,
 } from '@mui/icons-material'
import FlexBetween from './FlexBetween'
import { useDispatch } from 'react-redux'
import { setMode } from "../state/index";
import profileImage from "../assets/profile.jpg";
import { 
    AppBar,
    Button,
    Box,
    Typography, 
    IconButton, 
    InputBase,
    Toolbar,
    Menu,
    MenuItem,
    useTheme } from "@mui/material";

    const Navbar = ({user,isSidebarOpen, SetIsSidebarOpen}) => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const  [anchorE1, setAnchorE1] =useState(null);
    const isOpen =Boolean(anchorE1);
    const handleClick =(event)=> setAnchorE1(event.currentTarget);
    const handleClose =() => setAnchorE1(null);
      return (
    <AppBar
        sx={{
            position :"static",
            background:"none",
            boxShadow: "none",
        }}
    >
        <Toolbar sx={{justifyContent: "space-between"}}>
            {/* Left Side*/}
            <FlexBetween>
                <IconButton onClick={() => SetIsSidebarOpen(!isSidebarOpen)}>
                    <MenuIcon/>
                </IconButton>
            <FlexBetween
                backgroundColor = {theme.palette.background.alt}
                boarderRadius = "9px"
                gap = "3rem"
                p= "0.1rem  1.5rem">
                <InputBase placeholder="Search..."/>
                <IconButton>
                    <Search/>
                </IconButton>
                </FlexBetween>
            </FlexBetween>

            {/* RIGHT SIDE*/}
            <FlexBetween gap = '1.5rem' >
                <IconButton onClick={()=> dispatch(setMode())}>
                    {theme.palette.mode === 'dark'? (
                        <DarkModeOutlined sx ={{fontsize :'25px'}}/>
                    ):(
                        <LightModeOutlined sx ={{fontSize :"25px"}}/>
                    )}
                </IconButton>
                <IconButton>
                    <SettingsOutlined sx ={{fontSize :"25px"}}/>
                </IconButton>
                <FlexBetween>
                    <Button 
                    onClick = {handleClick}
                        sx={{
                            display:"flex",
                            justifyContent:"space-between",
                            alignItems :"center",
                            textTransform :"none",
                            gap :"1rem",
                        }}>
                    <Box
                    component ="img"
                    alt ="profile"
                    src ={profileImage}
                    height = "32px"
                    width = "32px"
                    borderRadius="50%"
                    sx={{objectFit:"cover"}}
                    />
                    
                    <ArrowDropDownOutlined
                    sx ={{color:theme.palette.secondary[300], fontSize: "25px"}}
                    />

                    </Button>
                    <Menu
                    anchorEl={anchorE1}
                    open = {isOpen}
                    onClose= {handleClose}
                    anchorOrigin ={{vertical:"bottom", horizontal:"center"}}
                    >
                        <MenuItem onClick={handleClose}>Log Out</MenuItem>
                    </Menu>
                </FlexBetween>
                
                </FlexBetween>
        </Toolbar>

    </AppBar>
  )
}

export default Navbar
