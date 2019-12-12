export const people = [
  {
    id: 0,
    name: 'huna',
    age: 20,
    gender: 'male'
  },
  {
    id: 1,
    name: 'Japan Guy',
    age: 10,
    gender: 'female'
  },
  {
    id: 2,
    name: 'Chinese guy',
    age: 26,
    gender: 'male'
  },
  {
    id: 3,
    name: 'Body',
    age: 300,
    gender: 'Un identify'
  },
  {
    id: 4,
    name: 'Policeman',
    age: 41,
    gender: 'male'
  },
  {
    id: 5,
    name: 'Coder',
    age: 15,
    gender: 'female'
  },
  {
    id: 6,
    name: 'Nico',
    age: 10,
    gender: 'female'
  }
];

export const getById = id =>
  people.filter(person => person.id === id)[0];