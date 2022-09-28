export const getMovieGenre = (key) => {
  return `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`;
};

export const getMovieByGenre = (type, key, genreID) => {
  return `https://api.themoviedb.org/3/movie/${type}?api_key=${key}&language=en-US&page=1&region=US&with_genres=${genreID}`;
};
