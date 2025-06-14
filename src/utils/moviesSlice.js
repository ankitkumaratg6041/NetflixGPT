import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        trailerVideo: null,
        nowPlayingMovies: null,
        trendingMovies: null,
        popularMovies: null,
        upcomingMovies: null,
        infoVideo: null, // This will hold the video information for a specific movie
        homePageMovieInfo: null // This will hold the movie information for the homepage
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
        addInfoVideo: (state, action) => { 
            state.infoVideo = action.payload;
        },
        addHomePageMovieInfo: (state, action) => { 
            state.homePageMovieInfo = action.payload;
        }
    }
})

export const { addTrailerVideo, addNowPlayingMovies, addTrendingMovies, addPopularMovies, addUpcomingMovies, addInfoVideo, addHomePageMovieInfo} = moviesSlice.actions;
export default moviesSlice.reducer;