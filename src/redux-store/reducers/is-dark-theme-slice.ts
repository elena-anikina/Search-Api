import {createSlice} from '@reduxjs/toolkit';
import {initialState} from '../initial-state';

export const IsDarkThemeSlice = createSlice({
    name: 'IsDarkThemeSlice',
    initialState: initialState.isDarkTheme,
    reducers: {
        updateIsDarkTheme: (state) => {
            return !state;
        }
    }
});

export const {updateIsDarkTheme} = IsDarkThemeSlice.actions;

export default IsDarkThemeSlice.reducer;
