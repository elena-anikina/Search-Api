// @ts-nocheck
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectorSelectAll, selectorList} from '../../redux-store/selectors';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import {SearchInput} from '../search-input/search-input';
import {updateList} from "../../redux-store/reducers/list-slice";
import {ListItemContent} from "./list-item-content";


export const ListApi = () => {

    const dispatch = useDispatch();
    const selectAll = useSelector(selectorSelectAll);
    const listInitial = useSelector(selectorList);

    return (
        <>
            <List sx={{ width: '100%', bgcolor: 'inherit'}}>
                {listInitial.slice(0, 6).map((el, index) => {
                    const labelId = `checkbox-list-label-${index}`;

                    return (
                        <ListItem
                            key={index}
                            selected={selectAll || el.checked}
                            sx={{marginBottom: '50px'}}
                            disablePadding
                        >
                            <ListItemButton role={undefined} onClick={() => dispatch(updateList(index))} dense>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={selectAll || el.checked}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                </ListItemIcon>
                                <div id={labelId}>
                                    <ListItemContent item={el} />
                                </div>
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </>
    );
}