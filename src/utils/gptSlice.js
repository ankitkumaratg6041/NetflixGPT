import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        movieResults: null, 
        movieNames: null, // This will hold the GPT movie search results
    },
    reducers: {
        toggleGptSearchView: (state) => { 
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state, action) => { 
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames; // Update the GPT movie search results
            state.movieResults = movieResults; // Update the TMDB movie search results
        },
        showHomePage: (state) => { 
            state.showGptSearch = false; // Hide the GPT search view
        }
    }
})

export const { toggleGptSearchView, addGptMovieResult, showHomePage } = gptSlice.actions;
export default gptSlice.reducer;