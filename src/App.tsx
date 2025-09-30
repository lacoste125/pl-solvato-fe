import React, {useState} from 'react';

import {createTheme, ThemeProvider} from '@mui/material/styles';
import {MenuDrawer} from "./components/MenuDrawer.tsx";
import {TopBar} from "./components/TopBar.tsx";
import {Footer} from "./components/Footer.tsx";
import {WelcomePage} from "./components/WelcomePage.tsx";

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {main: '#1976d2'},
        secondary: {main: '#dc004e'},
    },
});

export const App: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <ThemeProvider theme={theme}>
            <TopBar toggleDrawer={toggleDrawer}/>
            <MenuDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer}/>
            <WelcomePage/>
            <Footer/>
        </ThemeProvider>
    );
};