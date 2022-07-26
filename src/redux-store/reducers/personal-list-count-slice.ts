import {createSlice} from '@reduxjs/toolkit';
import {initialState} from '../initial-state';

export const PersonalListCountSlice = createSlice({
    name: 'PersonalListCountSlice',
    initialState: initialState.personalListCount,
    reducers: {
        updatePersonalListCount: (state, {payload}) => {
            return payload;
        }
    }
});

export const {updatePersonalListCount} = PersonalListCountSlice.actions;

export default PersonalListCountSlice.reducer;