import { useState, useEffect } from "react";
import { fetchRequest } from "../api/FetchRquests/FetchRequest";
import { getMoviesEndpoint } from "../api/endpoint/movies";
import { key } from "../api/TMBDKey.js";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

export const useGetMovies = (title, method) => {
  const [result, setResult] = useState([]);
  const [page, setPage] = useState(2);
  const [isFetching, setIsFetching] = useInfiniteScroll(infiniteMovies);
  const movieInfiniteEndpoint = getMoviesEndpoint(title, key, page);

  const movieEndpoint = getMoviesEndpoint(title, key, 1);

  const set = new Set(result.map((item) => JSON.stringify(item)));
  const deduped = [...set].map((item) => JSON.parse(item));
  // console.log(movieEndpoint);
  // console.log(`Removed ${result.length - deduped.length} elements`);
  // console.log(deduped);

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
    movies();
  }, [method, movieEndpoint]);

  return deduped;
};
