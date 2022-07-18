// @ts-nocheck
import * as React from 'react';
import {ListApi} from './components/list-api/list-api';
import Container from '@mui/material/Container';
import {Header} from './components/header/header';
import {Routes, Route} from 'react-router-dom';
import {HomePage} from "./pages/home-page";
import {PersonalListPage} from "./pages/personal-list-page";


export const App = () => {

    return (
        <>
        <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="personal-list" element={<PersonalListPage />} />
            </Routes>
        </>
    );
}

