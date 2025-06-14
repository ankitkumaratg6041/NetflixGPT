import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react'
import lang from '../utils/languageConstants'
import client from '../utils/openai'
import { API_OPTIONS } from '../utils/constants'
import { addGptMovieResult } from '../utils/gptSlice'

const GptSearchBar = () => {
    const dispatch = useDispatch();
    // const tmdbMoviesStore = useSelector(store => store.gpt.gptMovies)
    const langKey = useSelector(store => store.config.lang)
    const searchText = useRef(null)

    // Function to search for a movie using TMDB API
    const searchMovieTMDB = async (movie) => { 
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS)
        .then(res => res.json())
        .catch(err => console.error(err));
        
        // console.log(`Response for movie ${movie}:`, response);
        // const result = response.results[0]; // Get the first result from the search
        // console.log("First result:", result);
        return response;
    }

    const handleGptSearchClick = async () => { 
        // console.log("inside handleGptSearchClick")
        const gptQuery = "Act as a movie recommendation system and suggest movies for the query" + searchText.current.value + "give me only 5 movies, comma separated like the example result given ahead: Example result: Gadar, The Dark Knight, Inception, Interstellar, The Matrix";
        const result = await client.responses.create({
            model: 'gpt-4o',
            instructions: 'You are the user',
            input: gptQuery,
        });
        
        if(!result || !result.output_text) {
            console.error("No response from GPT-4o");
            // TODO: do proper error handling here
            return;
        }
        // console.log(result.output_text);
        // gptMovies is an array of movie names returned by GPT-4o
        const gptMovies = result.output_text.split(',').map(movie => movie.trim());
        // console.log("New result:", gptMovies);

        // Fetch movie details from TMDB for each movie

        // promiseArray is an array of promises that will resolve to the movie details
        // We can use Promise.all to wait for all promises to resolve
        // This will return an array of movie details
        // Note: This is an async function, so we need to handle it accordingly
        const promiseArray = gptMovies.map(async (movie) => { 
           return searchMovieTMDB(movie);
        })

        const tmdbDetails = await Promise.all(promiseArray)
        console.log("TMDB Details:", tmdbDetails);
        // Here you can dispatch the tmdbDetails to the Redux store
        dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbDetails}));
        // console.log("Stored GPT movies in Redux store:", tmdbMoviesStore);

    }
  return (
    <div className='pt-[10%] flex justify-center'>
          <form className='w-1/2 bg-black grid grid-cols-12 rounded-lg' onSubmit={(e) => {e.preventDefault();}}>
              <input
                  ref={searchText}
                  className='p-4 m-4 col-span-9 rounded-lg bg-white outline-none'
                  type="text"
                  placeholder={lang[langKey].gptSearchPlaceholder}
              />

              <button
                  onClick={handleGptSearchClick}
                className='p-4 m-4 col-span-3 bg-green-600 text-white rounded-lg cursor-pointer hover:bg-green-700 transition duration-300'
              >
                  {lang[langKey].search}
              </button>
          </form>      
    </div>
  )
}

export default GptSearchBar