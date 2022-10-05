import { useState } from "react";
import global from "../../../global.module.scss";
import styles from "../movieTypes.module.scss";
import { getImage } from "../../../api/endpoint/image";
import { useGetMovies } from "../../../hooks/useGetMovies";
import { useGetGenre } from "../../../hooks/useGetGenre";
import { ModalShow } from "../../Modal/ModalShow";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../../../redux/slice/movies/movieID-slice";
import {
  openDispatchModal,
  closeModal,
} from "../../Modal/ModalHelper/ModalHelpers";

export default function Upcoming() {
  const upcoming = useGetMovies("upcoming", "GET");
  const genre = useGetGenre();
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const moviesID = useSelector((state) => state.movieID);
  const { id } = moviesID;

  return (
    <ol className={global.gridWrapper}>
      {Array.isArray(upcoming) &&
        upcoming.map((data) => (
          <li className={styles.container} key={data.id}>
            <div className={styles.image}>
              <img src={getImage(data.backdrop_path)} alt={data.title} />
            </div>
            <button
              className={styles.btnInfo}
              onClick={() =>
                openDispatchModal(
                  dispatch,
                  movieAction,
                  setShowModal,
                  showModal,
                  data.id
                )
              }
            >
              <AiOutlineInfoCircle />
            </button>
            {
              <ModalShow
                showModal={showModal}
                closeModal={() => closeModal(setShowModal)}
                id={id}
                data={data}
              />
            }
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
