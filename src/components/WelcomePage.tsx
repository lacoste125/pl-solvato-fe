import React from "react";
import {Box, Button, Container, Typography} from "@mui/material";

export const WelcomePage: React.FC = () => {
    return (
        <Box component="main" className="main-box">
            <Container>
                <Typography variant="h4" gutterBottom>
                    Witaj w Macieju zwany "Kopytnym"!
                </Typography>
                <Typography>
                    Takie coś na początek - jak Ci się niebieski nie podoba to mozemy zrobić co innego ale to po
                    woli
                </Typography>
                <Button variant="contained" color="primary">
                    Przykładowy przycisk
                </Button>
            </Container>
        </Box>
    )
}