import axios from 'axios';
import R from 'ramda';

const BASE_URL = 'https://yts.am/api/v2/';
const LIST_MOVIES_URL = BASE_URL + 'list_movies.json';

export const getMovies = (limit, rating) =>
  axios(LIST_MOVIES_URL, { params: { limit, minimum_rating: rating }})
    .then(R.path(['data', 'data', 'movies']));