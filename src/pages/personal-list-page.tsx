import React from 'react';
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import {useSelector} from "react-redux";
import {selectorList} from "../redux-store/selectors";
import {ListItemContent} from "../components/list-api/list-item-content";


export const PersonalListPage = () => {
    const list = useSelector(selectorList);
    const listFiltered = list.filter((el: any) => el.checked);
    return (
        <Container maxWidth="sm">
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {listFiltered.slice(0, 10).map((el, index) => {
                    const labelId = `checkbox-list-label-${index}`;

                    return (
                        <ListItem
                            key={index}
                            sx={{marginBottom: '50px'}}
                            disablePadding
                        >
                            <ListItemButton sx={{cursor: 'auto'}} role={undefined} dense>
                                <div id={labelId}>
                                    <ListItemContent item={el} />
                                </div>
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </Container>
    );
};