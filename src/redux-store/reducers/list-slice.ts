import {createSlice} from '@reduxjs/toolkit';
import {initialState} from '../initial-state';


export const ListSlice = createSlice({
    name: 'listSlice',
    initialState: initialState.list,
    reducers: {
        updateList: (state, {payload}) => {
            return state.map((el, i) => {
                if (i === payload) { return {...el, checked: !el.checked} }
                return el;
            })
        }
    }
});

export const {updateList} = ListSlice.actions;

export default ListSlice.reducer;