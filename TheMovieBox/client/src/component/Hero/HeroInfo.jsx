import React from "react";
import VerticalLine from "../VerticalLine/VerticalLine";
import { useGetGenre } from "../../hooks/useGetGenre";
import styles from "./Hero.module.scss";

export default function HeroInfo({
  data: { original_language, release_date, vote_average, overview, genre_ids },
}) {
  const genre = useGetGenre();
  return (
    <>
      <div className={styles.modalSmallHeader}>
        <div>
          Original language:
          <span>{original_language}</span>
        </div>
        <VerticalLine />
        <div>
          Release date:
          <span>{release_date}</span>
        </div>
        <VerticalLine />
        <div>
          Rating:
          <span>{vote_average}</span>
        </div>
      </div>
      <div className={styles.description}>
        Overview: <span>{overview}</span>
      </div>
      <div className={styles.genres}>
        <VerticalLine classNames={styles.genresVLine} />
        {genre_ids.map((id) => (
          <span key={genre[id]}>{genre[id]}</span>
        ))}
      </div>
    </>
  );
}
