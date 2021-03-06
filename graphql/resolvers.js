import { getMovies, getMovie, suggestions } from './db';

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => suggestions(id)
  }
};

export default resolvers;