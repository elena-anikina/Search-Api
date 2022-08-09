import {createSlice} from '@reduxjs/toolkit';
import {initialState} from '../initial-state';

export const InputValueSlice = createSlice({
    name: 'InputValueSlice',
    initialState: initialState.inputValue,
    reducers: {
        updateInputValue: (state, {payload}) => {
            return payload;
        }
    }
});

export const {updateInputValue} = InputValueSlice.actions;

export default InputValueSlice.reducer;
