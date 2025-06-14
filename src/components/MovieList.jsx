import MovieCard from "./MovieCard"

function MovieList({ title, movies, onMovieClick }) {
    // console.log(movies)
  return (
    <div className="px-6">
        <h1 className="text-3xl py-4 text-white">{title}</h1>
        <div className="flex overflow-x-scroll">
            <div className="flex">
                {
                    movies?.map((movie) => (
                        <MovieCard posterPath={movie.poster_path} key={movie.id} onClick={() => onMovieClick(movie)} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default MovieList