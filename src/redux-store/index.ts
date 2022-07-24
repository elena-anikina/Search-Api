import {combineReducers, configureStore} from '@reduxjs/toolkit';
import SelectAllReducer from './reducers/select-all-slice';
import ListReducer from './reducers/list-slice';
import PaginationReducer from './reducers/pagination-slice';
import IsDarkThemeReducer from './reducers/is-dark-theme-slice';


const rootReducer = combineReducers({
    selectAll: SelectAllReducer,
    list: ListReducer,
    pagination: PaginationReducer,
    isDarkTheme: IsDarkThemeReducer
});

export const store = configureStore({
    reducer: rootReducer
});

export type TypeState = ReturnType<typeof store.getState>
