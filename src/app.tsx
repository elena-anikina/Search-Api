// @ts-nocheck
import * as React from 'react';
import {ListApi} from './components/list-api/list-api';
import Container from '@mui/material/Container';
import {Header} from './components/header/header';


export const App = () => {

    return (
        <>
        <Header />
        <Container maxWidth="sm">
            <ListApi/>
        </Container>
        </>
    );
}

