import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailor = (movieId) => {
    const dispatch = useDispatch(); // This is to dispatch actions to the Redux store

    // MEMOIZATION: Using useSelector to get the  from the Redux store
    // This is to avoid unnecessary re-renders and to access the latest state
    const trailerVideo = useSelector((store) => store.movies.trailerVideo); // Selecting infoVideo from the Redux store


    // Fetching movie videos from the API and updating the Redux store
    const getMovieVideos = async () => { 
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const json = await data.json();
        const filterData = json?.results?.filter(video => video.type === "Trailer");
        const trailer = filterData?.length ? filterData[0] : json?.results[0];
        // Storing the trailer in Redux store
        dispatch(addTrailerVideo(trailer))
    }

    // Call the function to fetch movie videos
    useEffect(() => { 
        // Memoization: Only fetch movie videos if they are not already in the store
        !trailerVideo && getMovieVideos(movieId);
    }, [])
}

export default useMovieTrailor;