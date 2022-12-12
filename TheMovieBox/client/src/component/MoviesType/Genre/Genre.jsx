import React, { useState, useEffect } from "react";
import styles from "./Genre.module.scss";
import { key } from "../../../api/TMBDKey.js";
import { fetchRequest } from "../../../api/FetchRquests/FetchRequest";
import { getMovieGenre } from "../../../api/endpoint/genre";
import global from "../../../global.module.scss";
import MovieTypesData from "../../MoviesType/MovieTypesData";
import { useGetGenreMovies } from "../../../hooks/useGetGenreMovies";

export default function Genre() {
  const [genres, setGenres] = useState([]);
  const genre = getMovieGenre(key);
  const [value, setValue] = useState("");
  const TopMovieGenre = useGetGenreMovies(value, "GET", "2022-01-01");
  useEffect(() => {
    try {
      fetchRequest(genre, "GET", key).then((response) => {
        setGenres(response.data.genres);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className={global.container}>
      <form className={styles.form}>
        <select onChange={(e) => setValue(e.target.value)} size='3'>
          {genres.map((data) => {
            return (
              data.id !== 99 && (
                <option value={data.id} key={data.id}>
                  {data.name}
                </option>
              )
            );
          })}
        </select>
      </form>
      <div>
        <MovieTypesData dataType={TopMovieGenre} />
      </div>
    </div>
  );
}
