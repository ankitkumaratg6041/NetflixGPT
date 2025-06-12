import { useSelector } from 'react-redux';
import MovieList from './MovieList';

export default function SecondaryContainer() {
  const movies = useSelector(state => state.movies);

  return (
    movies &&
    (
      <div className='bg-black w-screen'>
        <div className='-mt-60 pl-10 relative z-20'>
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
          <MovieList title={"Trending"} movies={movies.trendingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
        </div>
      </div>
    )
  )
}
