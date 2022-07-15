import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import {updateSelectAll} from '../../redux-store/reducers/select-all-slice';
import {useDispatch, useSelector} from 'react-redux';
import {selectorSelectAll} from '../../redux-store/selectors';

export const SearchInput = () => {
    const dispatch = useDispatch();
    const selectAll = useSelector(selectorSelectAll);
    return (
        <>
        <TextField
            sx={{width: '100%', marginBottom: '10px'}}
            id="outlined-search"
            label="Search field"
            type="search"
            margin="normal"
            variant="outlined"
        />
        <div style={{marginBottom: '50px'}}  aria-label="outlined primary button group">
            <Button
                sx={{marginRight: '10px'}}
                variant="contained"
                endIcon={selectAll ? <CheckRoundedIcon /> : null}
                onClick={() => dispatch(updateSelectAll())}
            >
                Выбрать все
            </Button>
            <Button variant="contained">Добавить в отчет</Button>
        </div>
        </>
    );
};