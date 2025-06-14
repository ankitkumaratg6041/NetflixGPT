import { IMG_CDN_URL } from "../utils/constants"

function MovieCard({ posterPath, onClick }) {
  if(!posterPath) return null;
  return (
    <div className="w-48 cursor-pointer" onClick={onClick}>
          {/* The onClick prop is used to handle click events on the movie card */}
          {/* If posterPath is not available, return null to avoid rendering an empty card */}
          <img
            alt="Movie Poster"
              src={IMG_CDN_URL + posterPath}
              className="rounded-lg object-cover"
          />      
    </div>
  )
}

export default MovieCard