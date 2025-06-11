import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import moviesReducer from './moviesSlice'; 
/**
 * Creates a Redux store for the application.
 * This store can be used to manage the state of the application.
 * store takes reducer which contains various reducers of slices for the store.
 * Once you have the store now create slices for the store
 */

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
    }
})

export default appStore;