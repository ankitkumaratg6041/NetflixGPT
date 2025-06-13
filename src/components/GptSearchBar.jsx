import { useSelector } from 'react-redux'
import lang from '../utils/languageConstants'

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang)
  return (
    <div className='pt-[10%] flex justify-center'>
          <form className='w-1/2 bg-black grid grid-cols-12 rounded-lg'>
              <input
                  className='p-4 m-4 col-span-9 rounded-lg bg-white outline-none'
                  type="text"
                  placeholder={lang[langKey].gptSearchPlaceholder}
              />

              <button
                className='p-4 m-4 col-span-3 bg-green-600 text-white rounded-lg cursor-pointer hover:bg-green-700 transition duration-300'
              >
                  {lang[langKey].search}
              </button>
          </form>      
    </div>
  )
}

export default GptSearchBar