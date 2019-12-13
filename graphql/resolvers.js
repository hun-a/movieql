import { getMoviews, getById, deleteMovie } from './db';

const resolvers = {
  Query: {
    movies: () => getMoviews(),
    movie: (_, { id }) => getById(id)
  }
};

export default resolvers;