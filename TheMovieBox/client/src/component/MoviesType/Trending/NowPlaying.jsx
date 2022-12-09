import { useState, useEffect } from "react";
import global from "../../../global.module.scss";
import styles from "../movieTypes.module.scss";
import { getImage } from "../../../api/endpoint/image";
import { useGetMovies } from "../../../hooks/useGetMovies";
import { useGetGenre } from "../../../hooks/useGetGenre";
import {
  AiOutlineInfoCircle,
  AiOutlinePlusCircle,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import { ModalShow } from "../../Modal/ModalShow";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../../../redux/slice/movies/movieID-slice";
import { myListAction } from "../../../redux/slice/my-list/myList-slice";
import {
  openDispatchModal,
  closeModal,
} from "../../Modal/ModalHelper/ModalHelpers";

export default function NowPlaying() {
  const nowPlaying = useGetMovies("now_playing", "GET");
  const genre = useGetGenre();
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const moviesID = useSelector((state) => state.movieID);
  const movieList = useSelector((state) => state.listData);
  const { id } = moviesID;

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator
  const moviesInList = movieList.myListData.map((item) => item.movieID);
  // console.log(moviesInList);

  const isMoviesInList = (data) => {
    // TC: O(N)
    var iterator = moviesInList.values();
    // console.log(iterator);

    for (let elements of iterator) {
      // console.log("data.id", data);
      // console.log("elements", elements);

      if (elements === data) {
        // console.log("elements == data:", data);
        return data;
      } else {
        // console.log("elements != data:", data);
        continue;
      }
    }
  };

  const addMovieToList = (data) => {
    /* TO DO: CREATE SPAM DISPATCH DETECTION / BLOCK */
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/is_not_iterable
    // console.log(moviesID.movieListID);
    // console.log(movieList);
    // for (const id of Object.keys(moviesID)) {
    //   console.log(id);
    // }
    dispatch(
      myListAction.appendToList({
        movieID: data.id,
        title: data.title,
        original_language: data.original_language,
        release_date: data.release_date,
        overview: data.overview,
        backdrop_path: data.backdrop_path,
        genres: data.genre_id,
      })
    );
    dispatch(movieAction.addMovieToListID({ id: data.id }));
  };

  return (
    <ol className={global.gridWrapper}>
      {Array.isArray(nowPlaying) &&
        nowPlaying.slice(1).map((data) => (
          <li className={styles.container} key={data.id}>
            <div className={styles.image}>
              <img src={getImage(data.backdrop_path)} alt={data.title} />
            </div>
            <button
              className={styles.btnAddList}
              onClick={() => {
                addMovieToList(data);
                console.log(data.id);
              }}
            >
              {isMoviesInList(data.id) ? (
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
