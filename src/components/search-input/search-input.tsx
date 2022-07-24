// @ts-nocheck
import React, {MouseEventHandler} from 'react';
import TextField from '@mui/material/TextField';
import {useSelector} from 'react-redux';
import {selectorSelectAll, selectorList} from '../../redux-store/selectors';


export const SearchInput = () => {

    const list = useSelector(selectorList);
    const added = list.filter((el) => el.checked).length;

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event: MouseEventHandler<HTMLButtonElement>, reason: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <>
        <TextField
            sx={{width: '100%', marginBottom: '10px'}}
            id="outlined-search"
            label="Найти API"
            type="search"
            margin="normal"
            variant="outlined"
        />
        </>
    );
};