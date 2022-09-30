import { useState, useEffect } from "react";
import { getMovieGenre } from "../api/endpoint/genre";
import { key } from "../api/TMBDKey.js";
import { fetchRequest } from "../api/FetchRquests/FetchRequest";

export const useGetGenre = () => {
  const [genre, setGenre] = useState([]);
  const getGenre = getMovieGenre(key);
  useEffect(() => {
    fetchRequest(getGenre, "GET", key).then((response) => {
      const genres = response.data.genres.reduce((genres, gen) => {
        const { id, name } = gen;
        genres[id] = name;
        return genres;
      }, []);
      setGenre(genres);
    });
  }, []);

  return genre;
};
