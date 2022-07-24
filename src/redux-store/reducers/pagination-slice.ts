import {createSlice} from '@reduxjs/toolkit';
import {initialState} from '../initial-state';

export const PaginationSlice = createSlice({
    name: 'PaginationSlice',
    initialState: initialState.pagination,
    reducers: {
        updatePagination: (state) => {
            return state;
        }
    }
});

export const {updatePagination} = PaginationSlice.actions;

export default PaginationSlice.reducer;
