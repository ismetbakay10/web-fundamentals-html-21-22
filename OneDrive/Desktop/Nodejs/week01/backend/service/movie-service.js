let movieDatabase = [
  {
    id: 10001,
    name: "Die Hard",
    year: 1999,
  },
  {
    id: 10002,
    name: "Green  Miles",
    year: 1999,
  },
  {
    id: 10003,
    name: "Titanic",
    year: 1995,
  },
  {
    id: 10004,
    name: "Matrix",
    year: 1999,
  },
  {
    id: 10005,
    name: "The Sixth Sense",
    year: 2000,
  },
  {
    id: 10006,
    name: "Gladiator",
    year: 2000,
  },
  {
    id: 10007,
    name: "Harry Potter",
    year: 2001,
  },
  {
    id: 10008,
    name: "The Lord of the Rings",
    year: 2002,
  },
  {
    id: 10009,
    name: "Mission Impossible 2",
    year: 2000,
  },
  {
    id: 10010,
    name: "Batman Begins",
    year: 2004,
  },
];

export function getAllMovies() {
  return movieDatabase;
}

export function getMovieById(pId) {
  let movie = movieDatabase.find((m) => m.id == pId);
  return movie;
}

export function createMovie(pMovie) {
  movieDatabase.push(pMovie);
  return pMovie;
}

export function deleteMovie(pId) {
  movieDatabase = movieDatabase.filter((m) => m.id != pId);
}

export function updateMovie(pId, pUpdatedMovie) {
  let movie = movieDatabase.find((m) => m.id == pId);
  movie.name = pUpdatedMovie.name;
  movie.year = pUpdatedMovie.year;
  return movie;
}

//let newMovie = JSON.parse(JSON.stringify(movie))
//Object.assign({}, movie)
