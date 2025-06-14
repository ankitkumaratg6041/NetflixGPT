import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => { 
    const dispatch = useDispatch(); // This is to dispatch actions to the Redux store

    // MEMOIZATION: Using useSelector to get the infoVideo from the Redux store
    // This is to avoid unnecessary re-renders and to access the latest state
    const upcomingMovies = useSelector((state) => state.movies.upcomingMovies);

    const getUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    }

    useEffect(() => { 
        // Memoization: Only fetch upcoming movies if they are not already in the store
        !upcomingMovies && getUpcomingMovies();
    }, [])
}

export default useUpcomingMovies;