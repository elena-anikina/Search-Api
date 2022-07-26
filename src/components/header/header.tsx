// @ts-nocheck
import React from'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectorIsDarkTheme, selectorList, selectorPersonalListCount} from '../../redux-store/selectors';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import './header.css';
import {ThemeSwitch} from '../theme-switch/theme-switch';
import {updateIsDarkTheme} from '../../redux-store/reducers/is-dark-theme-slice';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => {
    return  ({
        '& .MuiBadge-badge': {
            top: 3,
            backgroundColor: theme.palette.mode === 'light' ? '#ef5350' : '#c62828',
            color: theme.palette.mode === 'light' ? '#fff' : '#121212'
        },
    })
});

export const Header = () => {

    const dispatch = useDispatch();
    const isDarkTheme = useSelector(selectorIsDarkTheme);
    const list = useSelector(selectorList);
    const personalListCount = useSelector(selectorPersonalListCount);

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
                sx={{margin: '10px'}}
            >
                API SEARCH
            </Button>
            <div>
                <ThemeSwitch  sx={{margin: '10px'}} checked={isDarkTheme} onChange={() => dispatch(updateIsDarkTheme())} />
                <StyledBadge badgeContent={personalListCount}>
                <Link  sx={{margin: '10px'}} to="/personal-list" className="link">
                    <Button
                        id="fade-button"
                        aria-controls={undefined}
                        aria-haspopup="true"
                        aria-expanded={undefined}
                    >
                        Ваш лист API
                    </Button>
                </Link>
                </StyledBadge>
                <Button
                    sx={{margin: '10px'}}
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