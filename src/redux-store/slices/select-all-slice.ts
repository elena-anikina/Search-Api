import {createSlice} from '@reduxjs/toolkit';
import {initialState} from '../initial-state';

export const SelectAllSlice = createSlice({
    name: 'SelectAllSlice',
    initialState: initialState.selectAll,
    reducers: {
        updateSelectAll: (state) => {
            return !state;
        }
    }
});

export const {updateSelectAll} = SelectAllSlice.actions;

export default SelectAllSlice.reducer;