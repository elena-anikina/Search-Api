// @ts-nocheck
import React, {MouseEventHandler} from 'react';
import TextField from '@mui/material/TextField';
import {useDispatch, useSelector} from 'react-redux';
import {updateInputValue} from '../../redux-store/reducers/input-value-slice';
import {selectorSelectAll, selectorList, selectorInputValue} from '../../redux-store/selectors';


export const SearchInput = () => {

    const dispatch = useDispatch();

    const list = useSelector(selectorList);
    const inputValue = useSelector(selectorInputValue);
    const added = list.filter((el) => el.checked).length;

    return (
        <>
        <TextField
            sx={{width: '100%', marginBottom: '10px'}}
            id="outlined-search"
            label="Найти API"
            type="search"
            margin="normal"
            variant="outlined"
            onChange={(e) => dispatch(updateInputValue(e.target.value))}
            value={inputValue}
        />
        </>
    );
};