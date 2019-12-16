import fetch from 'node-fetch';

const API_URL = 'http://yts.am/api/v2/list_movies.json';

export const getMovies = () => new Promise((resolve, reject) => {
  fetch(`${API_URL}`)
    .then(res => res.json())
    .then(json => resolve(json.data.movies))
    .catch(reject);
});