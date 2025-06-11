import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailor = (movieId) => {
    const dispatch = useDispatch(); // This is to dispatch actions to the Redux store
    
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
        getMovieVideos(movieId);
    }, [])
}

export default useMovieTrailor;