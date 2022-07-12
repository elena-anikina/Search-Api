import {combineReducers, configureStore} from '@reduxjs/toolkit';
import SelectAllReducer from './slices/select-all-slice';

const rootReducer = combineReducers({
    selectAll: SelectAllReducer
});

export const store = configureStore({
    reducer: rootReducer
});

export type TypeState = ReturnType<typeof store.getState>
