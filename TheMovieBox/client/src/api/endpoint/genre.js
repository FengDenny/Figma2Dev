export const getMovieGenre = (key) => {
  return `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`;
};

export const getMovieByGenre = (type, key, genreID) => {
  return `https://api.themoviedb.org/3/movie/${type}?api_key=${key}&language=en-US&page=1&region=US&with_genres=${genreID}`;
};

export const getTopMovieByGenre = (key, genreID, page, release_date) => {
  return `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=${page}&region=US&with_genres=${genreID}&primary_release_date.gte=${release_date}`;
};
