export const getMoviesEndpoint = (type, key, pages) => {
  return `https://api.themoviedb.org/3/movie/${type}?api_key=${key}&language=en-US&page=${pages}&region=US`;
};
