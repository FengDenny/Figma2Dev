export const getMoviesEndpoint = (type, key, pages) => {
  return `https://api.themoviedb.org/3/movie/${type}?api_key=${key}&language=en-US&page=${pages}&region=US`;
};

export const youtubeWatchURL = (key) => {
  return `https://www.youtube.com/embed/${key}?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0&playlist=${key}`;
};

export const getMovieYTTrailers = (id, key) => {
  return `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`;
};
