import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useTrendingMovies from '../hooks/useTrendingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'

const Browse = () => {
  // Custom hook to fetch now playing movies, this will automatically fetch all movies
  // when the component mounts and store them in the Redux store
  useNowPlayingMovies()
  useTrendingMovies()
  usePopularMovies()
  useUpcomingMovies()
  
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse