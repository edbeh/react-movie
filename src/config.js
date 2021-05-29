// Configuration for TMDB
// To see the latest configuration fetch it from https://api.themoviedb.org/3/configuration?api_key=019e8f375549e0bbd4a4191862ebc88f

// const CORS_URL = 'https://cors-anywhere.herokuapp.com/'
const API_URL = 'https://api.themoviedb.org/3/' // herokuapp.com is used to add cors header 'access control allow origin'
const API_KEY = '79979058d89787a1a5a51cfeb9b5f66a'

// Images
// An image URL looks like this example:
// http://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/'

//Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280'

// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w500'

export {
  // CORS_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
}
