import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        trailerVideo: null,
        nowPlayingMovies: null,
        trendingMovies: null,
        popularMovies: null,
        upcomingMovies: null
    },
    reducers: {
        addTrailerVideo: (state, action) => { 
            state.trailerVideo = action.payload;
        },
        addNowPlayingMovies: (state, action) => { 
            state.nowPlayingMovies = action.payload;
        },
        addTrendingMovies: (state, action) => { 
            state.trendingMovies = action.payload;
        },
        addPopularMovies: (state, action) => { 
            state.popularMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => { 
            state.upcomingMovies = action.payload;
        },
    }
})

export const { addTrailerVideo, addNowPlayingMovies, addTrendingMovies, addPopularMovies, addUpcomingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;