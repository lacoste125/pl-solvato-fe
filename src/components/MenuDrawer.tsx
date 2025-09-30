import {Divider, Drawer, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {Logo} from "./Logo.tsx";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/Inbox";
import React from "react";

export const MenuDrawer: React.FC<{
    drawerOpen: boolean,
    toggleDrawer: () => void,
}> = ({
    drawerOpen,
    toggleDrawer
}) => {
    return (
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer} className="custom-drawer">
            <Logo/>
            <Divider/>
            <List>
                {/*TODO - lista itemów do ustalenia i do przeniesienia w trakcie robienia routingu*/}
                {
                    [
                        'Dashboard',
                        'Rozliczenie',
                        'Przewinienia',
                        'Mandaty',
                        'Ustalenia',
                        'Uznania',
                        'Import Visa',
                        'Zakup części',
                    ].map(
                        (text: string) => (
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <InboxIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary={text}/>
                                </ListItemButton>
                            </ListItem>
                        )
                    )
                }
            </List>
        </Drawer>
    )
}