// @ts-nocheck
import * as React from 'react';
import Paper from '@mui/material/Paper';
import {ListApi} from './components/list-api/list-api';
import Container from '@mui/material/Container';
import {Header} from './components/header/header';
import {Routes, Route} from 'react-router-dom';
import {HomePage} from './pages/home-page';
import {PersonalListPage} from './pages/personal-list-page';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import './reset.css';
import {useSelector} from 'react-redux';
import {selectorIsDarkTheme} from './redux-store/selectors';


export const App = () => {

    const isDarkTheme = useSelector(selectorIsDarkTheme);

    const theme = createTheme({
        palette: {
            mode: isDarkTheme ? 'dark' : 'light',
        },
    });

    return (
            <>
                    <ThemeProvider theme={theme}>
                        <Paper style={{minHeight: '100vh'}}>
                        <Header/>
                        <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="personal-list" element={<PersonalListPage/>}/>
                        </Routes>
                        </Paper>
                    </ThemeProvider>
            </>
        );
};
