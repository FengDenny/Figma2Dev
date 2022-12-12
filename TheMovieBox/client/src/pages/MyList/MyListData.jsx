import React, { useState } from "react";
import styles from "./myList.module.scss";
import global from "../../global.module.scss";
import { getImage } from "../../api/endpoint/image";
import { useGetGenre } from "../../hooks/useGetGenre";
import { AiOutlineInfoCircle } from "react-icons/ai";
import {
  openDispatchModal,
  closeModal,
} from "../../component/Modal/ModalHelper/ModalHelpers";
import { useDispatch } from "react-redux";
import { movieAction } from "../../redux/slice/movies/movieID-slice";
import { ModalShow } from "../../component/Modal/ModalShow";

export default function MyListData({
  movieID,
  title,
  release_date,
  vote_average,
  backdrop_path,
  genre_ids,
  item,
}) {
  const [showModal, setShowModal] = useState(false);
  const genre = useGetGenre();
  const dispatch = useDispatch();

  return (
    <ol className={styles.listData}>
      <li>
        <div className={styles.image}>
          <img src={getImage(backdrop_path)} alt={title} />
        </div>
        <button
          className={styles.btnInfo}
          onClick={() =>
            openDispatchModal(
              dispatch,
              movieAction,
              setShowModal,
              showModal,
              movieID
            )
          }
        >
          <AiOutlineInfoCircle />
        </button>
        {
          <ModalShow
            showModal={showModal}
            closeModal={() => closeModal(setShowModal)}
            id={movieID}
            data={item}
          />
        }
        <div className={styles.header}>
          <h2>{title}</h2>
          <h5 className={styles.date}>{release_date.split("-").slice(0, 1)}</h5>
          <div className={`${global.dFlexRow} ${global.spaceBetween}`}>
            <div className={styles.genres}>
              {genre_ids.map((id) => (
                <h2 key={genre[id]}>{genre[id]}</h2>
              ))}
            </div>
            <div className={styles.rating}>{vote_average}</div>
          </div>
        </div>
      </li>
    </ol>
  );
}
