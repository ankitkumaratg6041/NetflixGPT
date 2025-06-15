import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import { MOVIE_GENRES } from '../utils/constants';
import { useEffect, useRef, useState } from 'react';
import useHomepageInfoVideo from '../hooks/useHomepageInfoVideo'; // Custom hook to fetch movie info

export default function SecondaryContainer() {
  const movies = useSelector(state => state.movies);
  const [movieId, setMovieId] = useState(null);
  useHomepageInfoVideo(movieId); // Custom hook to fetch and store movie info in Redux
  const homePageMovieInfo = useSelector(state => state.movies.homePageMovieInfo);
  const videoRef = useRef(null);

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
    movies &&
    (
      <div className='bg-black w-screen'>
        {movieId &&
          <div ref={videoRef} className="fixed w-200 top-1/8 left-1/4 z-50 bg-black text-white rounded-lg flex flex-col align-center ">
            {homePageMovieInfo?.key ? 
              <iframe className="w-200 aspect-video rounded-lg" src={`https://www.youtube.com/embed/${homePageMovieInfo?.key}?si=uDMt6FVgugOgv54B&autoplay=1&mute=1`} title="YouTube video player"></iframe>
              : <h1 className="text-3xl p-2 font-bold">No Trailer Available</h1>
            }
            <h3 className="text-3xl p-2 font-bold">{homePageMovieInfo?.name}</h3>
          </div>
        }

        <div className='mt-0 md:-mt-60 pl-4 md:pl-10 relative z-20'>
          {
            MOVIE_GENRES.map((genre) => 
              <MovieList 
                key={genre.id} 
                title={genre.name} 
                movies={movies[genre.slug]}
                onMovieClick={(movie) => setMovieId(movie.id)} // Placeholder for movie click handler
              />
            )
          }
        </div>
      </div>
    )
  )
}
