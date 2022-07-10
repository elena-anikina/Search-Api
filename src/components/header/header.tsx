import React from'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";


export const Header = () => {
    return (
        <Box sx={{display: 'flex', justifyContent: 'flex-end', padding: '10px'}}>
            <Button
                id="fade-button"
                aria-controls={undefined}
                aria-haspopup="true"
                aria-expanded={undefined}
            >
                Settings
            </Button>
            <Button
                id="fade-button"
                aria-controls={undefined}
                aria-haspopup="true"
                aria-expanded={undefined}
            >
                Profile
            </Button>
        </Box>
    );
};