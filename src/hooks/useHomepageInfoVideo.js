import { useDispatch } from "react-redux";
import { addHomePageMovieInfo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useInfoVideo = (movieId) => {
    const dispatch = useDispatch(); // This is to dispatch actions to the Redux store

    // Fetching movie videos from the API and updating the Redux store
    const getMovieVideos = async () => { 
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const json = await data.json();
        console.log("Movie videos data:", json);
        if(json.results.length === 0) {
            console.error("No videos found for this movie.");
            dispatch(addHomePageMovieInfo(null)); // Dispatching null if no videos are found
            return; // If no videos are found, exit the function
        }
        const filterData = json?.results?.filter(video => video.type === "Trailer");
        
        const trailer = filterData.length ? filterData[0] : json?.results[0];
        console.log("Trailer data:", trailer);
        // Storing the trailer in Redux store
        dispatch(addHomePageMovieInfo(trailer))
    }

    // Call the function to fetch movie videos
    useEffect(() => { 
        // If movieId is not provided, do not fetch
        if (!movieId) return;
        getMovieVideos(movieId);
    }, [movieId]); // Dependency array to re-run the effect when movieId changes
}

export default useInfoVideo;