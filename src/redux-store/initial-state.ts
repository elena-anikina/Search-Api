import {listArr} from "./list";


export const initialState = {
    selectAll: false,
    list: listArr.entries.map((el) => ({...el, checked: false})),
    pagination: 6,
    isDarkTheme: false,
    personalListCount: 0
};