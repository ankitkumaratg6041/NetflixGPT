import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

export default function MainContainer() {
    const movies = useSelector(state => state.movies?.nowPlayingMovies);
    if (!movies) return;

    const mainMovie = movies[0]; 
    const { original_title, overview, id } = mainMovie;

  return (
      <div className="md:pt-0 pt-[30%] bg-black">
        <VideoTitle title={original_title} overview={overview} />      
        <VideoBackground movieId={id} />
    </div>
  )
}
