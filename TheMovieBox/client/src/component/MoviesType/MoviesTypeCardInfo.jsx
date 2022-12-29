import { useState } from "react";
import global from "../../global.module.scss";
import styles from "./movieTypes.module.scss";
import { getImage } from "../../api/endpoint/image";
import { useGetGenre } from "../../hooks/useGetGenre";
import {
  AiOutlineInfoCircle,
  AiOutlinePlusCircle,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import { ModalShow, ModalTrailerShow } from "../Modal/ModalShow";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../../redux/slice/movies/movieID-slice";
import {
  openDispatchModal,
  closeModal,
  openHeroModal,
} from "../Modal/ModalHelper/ModalHelpers";

export default function MoviesTypeCardInfo({
  data,
  addMovieToList,
  isMoviesInList,
}) {
  const genre = useGetGenre();
  const [showModal, setShowModal] = useState(false);
  const [showTrailerModal, setShowTrailerModal] = useState(false);
  const dispatch = useDispatch();
  const moviesID = useSelector((state) => state.movieID);
  const userData = useSelector((state) => state.userData);
  const { isLoggedIn } = userData.userInfo;
  const { id } = moviesID;

  return (
    <li className={styles.container} key={data.id}>
      <div className={styles.image}>
        <img src={getImage(data.backdrop_path)} alt={data.title} />
      </div>
      <button
        className={styles.btnAddList}
        onClick={() => {
          addMovieToList(data);
        }}
      >
        {isMoviesInList(data.id) && isLoggedIn ? (
          <AiOutlineCheckCircle />
        ) : (
          <AiOutlinePlusCircle />
        )}
        {/* to check isMoviesInList() performance/steps   */}
        {/* {console.log(data)} */}
      </button>
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
        <button
          onClick={() => openHeroModal(setShowTrailerModal, showTrailerModal)}
          className={styles.trailerBtn}
        >
          Watch Trailer
        </button>
        {
          <ModalTrailerShow
            showModal={showTrailerModal}
            closeModal={() => closeModal(setShowTrailerModal)}
            data={data}
          />
        }
        <div className={`${global.dFlexRow} ${global.spaceBetween}`}>
          <div className={styles.genres}>
            {data.genre_ids.map((id) => (
              <h2 key={id}>{genre[id]}</h2>
            ))}
          </div>
          <div className={styles.rating}>{data.vote_average}</div>
        </div>
      </div>
    </li>
  );
}
