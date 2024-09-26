import React from "react";
import { Link } from "react-router-dom";
import {AppBar, Box, Button, Toolbar, Typography} from '@mui/material';

export default function Header(){
    return (
        <AppBar sx={{ backgroundColor:"#34426a"}}>
            <Toolbar>
                <Box sx={{py:2,  flexGrow:1}} size="2">
                <Typography component={Link} to={'/'} color="inherit" sx={{fontFamily:"Pacifico",}} >
                    M
                </Typography>
                </Box>
                <Box sx={{display:"flex", gap:2}}>
                    <Button component={Link} to={'/projects'} color="inherit" sx={{'&:hover':{bgcolor: 'primary.dark'}}}>Projects</Button>
                    <Button component={Link} to={'/'} color="inherit" sx={{'&:hover':{bgcolor: 'primary.dark'}}}>About</Button>
                    <Button component={Link} to={'/contact'} color="inherit" sx={{'&:hover':{bgcolor: 'primary.dark'}}}>Contact</Button>
                </Box>
        </Toolbar>
    </AppBar>
    )
}