import React from "react";
import global from "../../global.module.scss";
import styles from "./myList.module.scss";
import MyListData from "./MyListData";
import { useSelector } from "react-redux";

export default function MyList() {
  const { listData } = useSelector((state) => ({ ...state }));

  return (
    <section className={global.container}>
      <div className={styles.myList}>
        <h3>My List</h3>
        <div className={styles.listCard}>
          <div className={global.gridWrapper}>
            {listData.myListData.map((item) => {
              const {
                movieID,
                title,
                release_date,
                backdrop_path,
                genre_ids,
                vote_average,
              } = item;
              return (
                <MyListData
                  key={movieID}
                  movieID={movieID}
                  title={title}
                  release_date={release_date}
                  backdrop_path={backdrop_path}
                  genre_ids={genre_ids}
                  vote_average={vote_average}
                  item={item}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
