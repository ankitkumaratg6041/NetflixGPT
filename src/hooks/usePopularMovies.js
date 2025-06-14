import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => { 
    const dispatch = useDispatch(); // This is to dispatch actions to the Redux store

    // MEMOIZATION: Using useSelector to get the infoVideo from the Redux store
    // This is to avoid unnecessary re-renders and to access the latest state
    const popularMovies = useSelector((state) => state.movies.popularMovies);

    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }

    useEffect(() => { 
        // Memoization: Only fetch popular movies if they are not already in the Redux store
        !popularMovies && getPopularMovies();
    }, [])
}

export default usePopularMovies;