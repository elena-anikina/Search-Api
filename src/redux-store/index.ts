import {combineReducers, configureStore} from '@reduxjs/toolkit';
import SelectAllReducer from './reducers/select-all-slice';
import ListReducer from './reducers/list-slice';


const rootReducer = combineReducers({
    selectAll: SelectAllReducer,
    list: ListReducer
});

export const store = configureStore({
    reducer: rootReducer
});

export type TypeState = ReturnType<typeof store.getState>
