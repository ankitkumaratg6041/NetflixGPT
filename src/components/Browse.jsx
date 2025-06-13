import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useTrendingMovies from '../hooks/useTrendingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'

const Browse = () => {
  const showGpt = useSelector(store => store.gpt.showGptSearch)
  useNowPlayingMovies()
  useTrendingMovies()
  usePopularMovies()
  useUpcomingMovies()
  
  return (
    <div>
      <Header />
      {
        showGpt ? (<GptSearch />) :
        (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )
  }
    </div>
  )
}

export default Browse