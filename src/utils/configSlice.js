import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        lang: 'en', // Default language
    },
    reducers: {
        changeLanguage: (state, action) => { 
            state.lang = action.payload; // Update the selected language
        }
    }
})

export const { changeLanguage } = configSlice.actions;
export default configSlice.reducer;