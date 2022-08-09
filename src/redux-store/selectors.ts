import {TypeState} from './index';

export const selectorSelectAll = (state: TypeState) => state.selectAll;

export const selectorList = (state: TypeState) => state.list;

export const selectorIsDarkTheme = (state: TypeState) => state.isDarkTheme;

export const selectorPersonalListCount = (state: TypeState) => state.personalListCount;

export const selectorInputValue = (state: TypeState) => state.inputValue;