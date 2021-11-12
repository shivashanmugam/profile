import { createSlice } from '@reduxjs/toolkit';
import { themeConst, themePropConst } from '../Const/themeConst';

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        mode: themeConst.DARK,
    },
    reducers: {
        setTheme: (state, action) => {
            state.mode = action.payload[themePropConst.THEME]
        }
    }
})

export const { setWatchlistFeed } = themeSlice.actions

export default themeSlice.reducer;