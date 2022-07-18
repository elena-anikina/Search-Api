import React from 'react';
import Container from "@mui/material/Container";
import {ListApi} from "../components/list-api/list-api";


export const HomePage = () => {
    return (
        <Container maxWidth="sm">
            <ListApi/>
        </Container>
    );
};