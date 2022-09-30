import global from "../../../global.module.scss";
import styles from "../movieTypes.module.scss";
import { getImage } from "../../../api/endpoint/image";
import { useGetMovies } from "../../../hooks/useGetMovies";
import { useGetGenre } from "../../../hooks/useGetGenre";

export default function Popular() {
  const popular = useGetMovies("popular", "GET");
  const genre = useGetGenre();

  return (
    <ol className={global.gridWrapper}>
      {Array.isArray(popular) &&
        popular.map((data) => (
          <li className={styles.container} key={data.id}>
            <div className={styles.image}>
              <img src={getImage(data.backdrop_path)} alt={data.title} />
            </div>
            <div className={styles.header}>
              <h2>{data.title}</h2>
              <h5 className={styles.date}>
                {data.release_date.split("-").slice(0, 1)}
              </h5>
              <div className={`${global.dFlexRow} ${global.spaceBetween}`}>
                <div className={styles.genres}>
                  {data.genre_ids.map((id) => (
                    <h2 key={genre[id]}>{genre[id]}</h2>
                  ))}
                </div>
                <div className={styles.rating}>{data.vote_average}</div>
              </div>
            </div>
          </li>
        ))}
    </ol>
  );
}
