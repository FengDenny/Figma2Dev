import { useState, useEffect } from "react";
import global from "../../global.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../../redux/slice/movies/movieID-slice";
import { myListAction } from "../../redux/slice/my-list/myList-slice";
import MoviesTypeCardInfo from "./MoviesTypeCardInfo";
import { database } from "../../firebase/firebaseConfig";
import {
  collection,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  doc,
} from "firebase/firestore";

import { getAuth } from "firebase/auth";

export default function MovieTypesData({ dataType, type }) {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.listData);
  const userData = useSelector((state) => state.userData);
  const { isLoggedIn } = userData.userInfo;

  const auth = getAuth();
  console.log(auth.currentUser);
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

  const addMovieToList = async (data) => {
    const myListCollection = doc(database, "lists", "my-list");

    const checkDoc = await getDoc(myListCollection);

    // await addDoc(myListCollection, {
    //   movies: [{ ...data }],
    // }).then(async (data) => {
    //   if (data) {
    //     await updateDoc(myListCollection, {
    //       movies: arrayUnion({ ...data }),
    //     });
    //   }
    // });

    /* TO DO: CREATE SPAM DISPATCH DETECTION / BLOCK */
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/is_not_iterable
    // console.log(moviesID.movieListID);
    // console.log(movieList);
    // for (const id of Object.keys(moviesID)) {
    //   console.log(id);
    // }
    if (isLoggedIn) {
      dispatch(
        myListAction.appendToList({
          movieID: data.id,
          title: data.title,
          original_language: data.original_language,
          release_date: data.release_date,
          overview: data.overview,
          backdrop_path: data.backdrop_path,
          genre_ids: data.genre_ids,
          vote_average: data.vote_average,
        })
      );
      dispatch(movieAction.addMovieToListID({ id: data.id }));

      if (!checkDoc.exists()) {
        await setDoc(myListCollection, {
          movies: [
            {
              ...data,
            },
          ],
        });
      } else {
        updateDoc(myListCollection, {
          movies: arrayUnion({
            ...data,
          }),
        });
      }
    }
  };

  const dataSliced = () => {
    // TC: O(N)
    return (
      Array.isArray(dataType) &&
      dataType
        .slice(1)
        .map((data) => (
          <MoviesTypeCardInfo
            data={data}
            addMovieToList={addMovieToList}
            isMoviesInList={isMoviesInList}
          />
        ))
    );
  };

  const dataNotSliced = () => {
    // TC: O(N)

    return (
      Array.isArray(dataType) &&
      dataType.map((data) => (
        <MoviesTypeCardInfo
          data={data}
          addMovieToList={addMovieToList}
          isMoviesInList={isMoviesInList}
        />
      ))
    );
  };

  return (
    <ol className={global.gridWrapper}>
      {type === "now_playing" ? dataSliced() : dataNotSliced()}
    </ol>
  );
}
