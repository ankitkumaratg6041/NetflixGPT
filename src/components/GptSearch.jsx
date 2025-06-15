import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BACKGROUND_IMAGE_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
      <div className='fixed -z-10'>
          <img
            src={BACKGROUND_IMAGE_URL}
            alt="background"
            className='h-screen object-cover'
          />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  )
}

export default GptSearch