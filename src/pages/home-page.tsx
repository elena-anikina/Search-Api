import React from 'react';
import Container from "@mui/material/Container";
import {SearchInput} from "../components/search-input/search-input";
import {TabsComponent} from "../components/tabs-component/tabs-component";


export const HomePage = () => {
    return (
        <Container maxWidth="md" sx={{paddingTop: '100px'}}>
            <SearchInput />
            <TabsComponent />
        </Container>
    );
};