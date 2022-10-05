import { useState, useEffect } from "react";
import { fetchRequest } from "../api/FetchRquests/FetchRequest";
import { getTopMovieByGenre } from "../api/endpoint/genre";
import { key } from "../api/TMBDKey.js";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

export const useGetGenreMovies = (genreID, method, date) => {
  const [result, setResult] = useState([]);
  const [page, setPage] = useState(2);
  const [isFetching, setIsFetching] = useInfiniteScroll(infiniteMovies);
  const movieInfiniteEndpoint = getTopMovieByGenre(key, genreID, page, date);

  const movieEndpoint = getTopMovieByGenre(key, genreID, 1, date);

  const movies = () => {
    try {
      fetchRequest(movieEndpoint, method, key).then((response) => {
        setResult(
          response.data.results.filter((item) => item.backdrop_path !== null)
        );
      });
    } catch (err) {
      console.log(err);
    }
  };

  function infiniteMovies() {
    try {
      fetchRequest(movieInfiniteEndpoint, method, key).then((response) => {
        setResult(
          [...result, ...response.data.results].filter(
            (item) => item.backdrop_path !== null
          )
        );
        setPage(page + 1);
        setIsFetching(!isFetching);
      });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    movies();
  }, [genreID]);

  return result;
};
