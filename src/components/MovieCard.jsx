import { IMG_CDN_URL } from "../utils/constants"

function MovieCard({posterPath}) {
  return (
    <div className="w-48">
          <img
            alt="Movie Poster"
              src={IMG_CDN_URL + posterPath}
              className="rounded-lg object-cover"
          />      
    </div>
  )
}

export default MovieCard