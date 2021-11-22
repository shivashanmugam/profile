import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../Reducers/themeSlice';

export default configureStore({
    reducer: {
        theme: themeReducer
    }
})
