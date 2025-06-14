import { useSelector } from "react-redux"
import MovieList from "./MovieList"
import useInfoVideo from "../hooks/useInfoVideo";
import { useEffect, useRef, useState } from "react";


const GptMovieSuggestions = () => {
  const [movieId, setMovieId] = useState(null); // useState to manage the selected movieId
  useInfoVideo(movieId); // use the custom hook to fetch the movie trailer based on the movieId
  const infoVideo = useSelector(store => store.movies.infoVideo); // subscribe to the info video from the movies slice of the store
  const gpt = useSelector(store => store.gpt); // subscribe to the gpt slice of the store
  const { movieNames, movieResults } = gpt; // destructure the movieNames and movieResults from the gpt slice
  // if (!movieNames) return null; // if movieNames is not available, return null
  const videoRef = useRef(null); // useRef to reference the video container for click outside detection

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (videoRef.current && !videoRef.current.contains(event.target)) {
        setMovieId(null);
      }
    };
  
    if (movieId) {
      document.addEventListener("mousedown", handleClickOutside);
    }
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [movieId]);
  

  return (
    <>
      {gpt &&
        <div className=" bg-black text-white background-opacity-10 opacity-90">
          {movieId &&
            <div ref={videoRef} className="fixed w-200 top-1/8 left-1/4 z-10 bg-black text-white rounded-lg flex flex-col align-center ">
              <iframe className="w-200 aspect-video rounded-lg" src={`https://www.youtube.com/embed/${infoVideo?.key}?si=uDMt6FVgugOgv54B&autoplay=1&mute=1`} title="YouTube video player"></iframe>
              <h3 className="text-3xl p-2 font-bold">{infoVideo?.name}</h3>
            </div>
          }

          {
            movieNames?.map((movieName, index) => (
              <MovieList key={index} title={movieName} movies={movieResults[index]?.results} onMovieClick={(movie) => {setMovieId(movie.id)}} />
            ))
          }
        </div>
      }
    </>
  )
}

export default GptMovieSuggestions