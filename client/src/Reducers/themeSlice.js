import { createSlice } from '@reduxjs/toolkit';
import { themeConst, themePropConst } from '../Const/themeConst';

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        [themePropConst.MODE]: localStorage.theme ? localStorage.theme : themeConst.DARK,
    },
    reducers: {
        setTheme: (state, action) => {
            // state[themePropConst.MODE] = action.payload;
            localStorage.setItem('theme', action.payload)
            window.location.reload();
        }
    }
})

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer;