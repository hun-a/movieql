import axios from 'axios';
import R from 'ramda';

const BASE_URL = 'https://yts.lt/api/v2/';
const LIST_MOVIES_URL = BASE_URL + 'list_movies.json';
const MOVIE_DETAILS_URL = BASE_URL + 'movie_details.json';
const MOVIE_SUGGESTION_URL = BASE_URL + 'movie_suggestions.json';

export const getMovies = (limit, rating) =>
  axios(LIST_MOVIES_URL, { params: { limit, minimum_rating: rating }})
    .then(R.path(['data', 'data', 'movies']));

export const getMovie = id =>
  axios(MOVIE_DETAILS_URL, { params: { movie_id: id } })
    .then(R.path(['data', 'data', 'movie']));

export const suggestions = id =>
  axios(MOVIE_SUGGESTION_URL, { params: { movie_id: id } })
    .then(R.path(['data', 'data', 'movies']));