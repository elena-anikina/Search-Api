// @ts-nocheck
import React, {useState, useEffect} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import {SearchInput} from '../search-input/search-input';


export const ListApi = () => {

    useEffect(() => {
        fetch('https://api.publicapis.org/entries')
            .then((response) => {if (response.ok) {
                return response.json();
            }
        })
            .then((result) => {
                setList(result.entries.slice(0, 10));
            });

    }, []);

    const [checked, setChecked] = useState([0]);
    const [list, setList] = useState([]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <>
            <SearchInput />
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {list.map((el, index) => {
                    const labelId = `checkbox-list-label-${index}`;

                    return (
                        <ListItem
                            key={index}
                            selected={checked.indexOf(index) !== -1}
                            sx={{marginBottom: '50px'}}
                            disablePadding
                        >
                            <ListItemButton role={undefined} onClick={handleToggle(index)} dense>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={checked.indexOf(index) !== -1}
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