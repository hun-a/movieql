const huna = {
  name: 'huna',
  age: 20,
  gender: 'male'
};

const resolvers = {
  Query: {
    person: () => huna
  }
};

export default resolvers;