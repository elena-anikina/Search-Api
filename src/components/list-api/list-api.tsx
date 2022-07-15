// @ts-nocheck
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectorSelectAll, selectorList} from '../../redux-store/selectors';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import {SearchInput} from '../search-input/search-input';
import {updateList} from "../../redux-store/reducers/list-slice";


export const ListApi = () => {

    const dispatch = useDispatch();
    const selectAll = useSelector(selectorSelectAll);
    const listInitial = useSelector(selectorList);

    return (
        <>
            <SearchInput />
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {listInitial.slice(0, 10).map((el, index) => {
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
                                    <Typography variant="body1" gutterBottom component="div">
                                        {`API: ${el.API}`}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom component="div">
                                        {`Auth: ${el.Auth || 'no'}`}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom component="div">
                                        {`Category: ${el.Category}`}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom component="div">
                                        {`Cors: ${el.Cors}`}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom component="div">
                                        {`Description: ${el.Description}`}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom component="div">
                                        {`HTTPS: ${el.HTTPS}`}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom component="div">
                                        {`Link: ${el.Link}`}
                                    </Typography>
                                </div>
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </>
    );
}