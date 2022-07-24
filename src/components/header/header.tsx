// @ts-nocheck
import React from'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectorIsDarkTheme} from '../../redux-store/selectors';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import './header.css';
import {ThemeSwitch} from '../theme-switch/theme-switch';
import {updateIsDarkTheme} from '../../redux-store/reducers/is-dark-theme-slice';


export const Header = () => {

    const dispatch = useDispatch();
    const isDarkTheme = useSelector(selectorIsDarkTheme);

    return (
        <Box sx={{
            display: 'flex',
            width: '100%',
            minHeight: '50px',
            //borderBottom: `1px solid ${isDarkTheme ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)'}`,
            zIndex: '100',
            boxSizing: 'border-box',
            justifyContent: 'space-between',
            padding: '10px',
            position: 'fixed',
            backdropFilter: 'blur(20px)',
        }}>
            <Button
                id="fade-button"
                aria-controls={undefined}
                aria-haspopup="true"
                aria-expanded={undefined}
            >
                API SEARCH
            </Button>
            <div>
                <ThemeSwitch checked={isDarkTheme} onChange={() => dispatch(updateIsDarkTheme())} />
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
            </div>
        </Box>
    );
};