export const PHOTO_URL = "https://occ-0-8161-90.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
export const BACKGROUND_IMAGE_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web_tall_panel/CA-en-20250303-TRIFECTA-perspective_0b9144c0-5e9d-47f4-b388-9e147be89ba5_large.jpg"
export const LOGO_URL = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7b21-92dd-d4d4b93ad8a6/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + (import.meta.env.VITE_TMDB_KEY || ''),
  }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w200";

export const MOVIE_GENRES = [
  { id:1, name:"Now Playing", slug: "nowPlayingMovies" },
  { id: 2, name: "Trending", slug: "trendingMovies" },
  { id: 3, name: "Popular", slug: "popularMovies" },
  { id: 4, name: "Upcoming", slug: "upcomingMovies" },
]

export const SUPPORTED_LANGUAGES = [
  {identifier: 'en', name: 'English'},
  {identifier: 'hi', name: 'Hindi'},
  {identifier: 'pb', name: 'Punjabi'},
  {identifier: 'fr', name: 'French'},
  {identifier: 'es', name: 'Spanish'},
  {identifier: 'rs', name: 'Russian'}
]

// OpenAI
export const OPENAI_KEY = import.meta.env.VITE_OPENAI_KEY;