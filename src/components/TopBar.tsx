import React from "react";
import {AppBar, Avatar, Box, IconButton, Toolbar} from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import {Logo} from "./Logo.tsx";

export const TopBar: React.FC<{
    toggleDrawer: () => void
}> = ({
    toggleDrawer
}) => {
    return (
        <AppBar position="fixed" className="top-bar-background">
            <Toolbar className="top-bar-toolbar-display">
                <Box className="top-bar-box-display">
                    <IconButton color="inherit" edge="start" className="me-3" onClick={toggleDrawer}>
                        <MenuIcon/>
                    </IconButton>
                    <Logo/>
                </Box>
                {/*TODO - tu logika dla obsługi usera*/}
                <Avatar alt="User" src=""/>
            </Toolbar>
        </AppBar>
    )
}