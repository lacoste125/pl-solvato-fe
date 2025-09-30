import React from 'react';
import {Typography} from "@mui/material";
import solvato_logo from "../assets/logo.png";

export const Logo: React.FC = () => {
    return (
        <Typography variant="h6" component="div" align="center" mt="10px">
            <a href="http://localhost:5173/" target="_blank">
                <img src={solvato_logo} alt="Solvato logo" height="40px"/>
            </a>
        </Typography>
    )
}