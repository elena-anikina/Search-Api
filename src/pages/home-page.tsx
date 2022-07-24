import React from 'react';
import Container from "@mui/material/Container";
import {ListApi} from "../components/list-api/list-api";
import {SearchInput} from "../components/search-input/search-input";
import {TabsComponent} from "../components/tabs-component/tabs-component";


export const HomePage = () => {
    return (
        <Container maxWidth="sm" sx={{paddingTop: '100px'}}>
            <SearchInput />
            <TabsComponent />
        </Container>
    );
};