// @ts-nocheck
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {selectorSelectAll} from '../../redux-store/selectors';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import {SearchInput} from '../search-input/search-input';


export const ListApi = () => {
    const selectAll = useSelector(selectorSelectAll);
    useEffect(() => {
        fetch('https://api.publicapis.org/entries')
            .then((response) => {if (response.ok) {
                return response.json();
            }
        })
            .then((result) => {
                const list = result.entries.slice(0, 10).map((el) => ({data: el, checked: false}));
                setList(list);
            });

    }, []);

    const [checked, setChecked] = useState([0]);
    const [list, setList] = useState([]);
    const listArr = list.map((el) => ({data: el, checked: false}));

    return (
        <>
            <SearchInput />
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {list.map((el, index) => {
                    const labelId = `checkbox-list-label-${index}`;

                    return (
                        <ListItem
                            key={index}
                            selected={selectAll}
                            sx={{marginBottom: '50px'}}
                            disablePadding
                        >
                            <ListItemButton role={undefined} onClick={() => {}} dense>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={selectAll}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                </ListItemIcon>
                                <div id={labelId}>
                                    <Typography variant="body1" gutterBottom component="div">
                                        {`API: ${el.data.API}`}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom component="div">
                                        {`Auth: ${el.data.Auth || 'no'}`}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom component="div">
                                        {`Category: ${el.data.Category}`}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom component="div">
                                        {`Cors: ${el.data.Cors}`}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom component="div">
                                        {`Description: ${el.data.Description}`}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom component="div">
                                        {`HTTPS: ${el.data.HTTPS}`}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom component="div">
                                        {`Link: ${el.data.Link}`}
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