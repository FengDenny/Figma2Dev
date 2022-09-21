export const getMovieGenre = (key) => {
  return `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`;
};
