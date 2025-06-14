import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => { 
    const dispatch = useDispatch(); // This is to dispatch actions to the Redux store

    // MEMOIZATION: Using useSelector to get the infoVideo from the Redux store
    // This is to avoid unnecessary re-renders and to access the latest state
    const nowPlayingMovies = useSelector((state) => state.movies.nowPlayingMovies);

    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(() => { 
        // Memoization: Only fetch now playing movies if they are not already in the Redux store
        !nowPlayingMovies && getNowPlayingMovies();
    }, [])
}

export default useNowPlayingMovies;