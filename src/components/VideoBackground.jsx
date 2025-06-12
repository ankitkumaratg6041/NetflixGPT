import { useSelector } from "react-redux";
import useMovieTrailor from "../hooks/useMovieTrailor";

export default function VideoBackground({ movieId }) {
  // Accessing the trailer video from the Redux store
  const trailerVideo = useSelector(state => state.movies?.trailerVideo);

  // Fetching the trailer using custom hook and storing it in Redux store (moviesSlice)
  useMovieTrailor(movieId);
  return (
    <div className="w-screen">
      <iframe className="w-screen aspect-video" src={`https://www.youtube.com/embed/fbddYji1F8s?si=cGwsA0EsT35IPKGT${trailerVideo?.key}?&autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}`} title="YouTube video player" allow="autoplay"></iframe>
    </div>
  )
}
