import React from'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {Routes, Route, Link} from 'react-router-dom';
import './header.css';


export const Header = () => {
    return (
        <Box sx={{display: 'flex', justifyContent: 'flex-end', padding: '10px'}}>
            <Link to="/personal-list" className="link">
                <Button
                id="fade-button"
                aria-controls={undefined}
                aria-haspopup="true"
                aria-expanded={undefined}
            >
                Ваш лист API
                </Button>
            </Link>
            <Button
                id="fade-button"
                aria-controls={undefined}
                aria-haspopup="true"
                aria-expanded={undefined}
            >
                Профиль
            </Button>
        </Box>
    );
};