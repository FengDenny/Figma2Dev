import React, { useState, useEffect } from "react";

import styles from "./Genre.module.scss";
import { key } from "../../../api/TMBDKey.js";
import { fetchRequest } from "../../../api/FetchRquests/FetchRequest";
import { getMovieGenre } from "../../../api/endpoint/genre";
import global from "../../../global.module.scss";
import TopMovieGenre from "../Genre/TopMovieGenre";
export default function Genre() {
  const [genres, setGenres] = useState([]);
  const genre = getMovieGenre(key);
  const [value, setValue] = useState("");

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
        <TopMovieGenre value={value} />
      </div>
    </div>
  );
}
