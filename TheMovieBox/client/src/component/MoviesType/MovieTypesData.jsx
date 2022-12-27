import { useState, useEffect, useRef } from "react";
import global from "../../global.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../../redux/slice/movies/movieID-slice";
import MoviesTypeCardInfo from "./MoviesTypeCardInfo";
import { database } from "../../firebase/firebaseConfig";

import {
  collection,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  doc,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";

import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function MovieTypesData({ dataType, type }) {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const { isLoggedIn } = userData.userInfo;
  const [userID, setUserID] = useState();
  const [docID, setDocID] = useState();
  const [listDoc, setListDoc] = useState([]);

  const isMounted = useRef(true);
  const auth = getAuth();

  useEffect(() => {
    const getListDoc = () => {
      const filteredListRef = doc(database, "lists", `${docID}`);
      onSnapshot(filteredListRef, (results) => {
        setListDoc({ ...results.data() });
      });
    };
    getListDoc();
  }, [docID]);

  useEffect(() => {
    const getUserDoc = () => {
      const filteredRef = query(
        collection(database, "users"),
        where("uid", "==", `${userID}`)
      );
      onSnapshot(filteredRef, (results) => {
        results.docs.map((item) => setDocID(item.id));
      });
    };
    getUserDoc();
  }, [userID, docID]);

  useEffect(() => {
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUserID(user.uid);
        }
      });
    }
    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator
  const moviesInList =
    listDoc.movies === undefined ? [] : listDoc.movies.map((items) => items.id);

  const isMoviesInList = (data) => {
    // TC: O(N)
    var iterator = moviesInList.values();

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
    const myListCollection = doc(database, "lists", docID);
    const checkDoc = await getDoc(myListCollection);

    if (isLoggedIn) {
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

    /* TO DO: CREATE SPAM DISPATCH DETECTION / BLOCK */
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/is_not_iterable
    // console.log(moviesID.movieListID);
    // console.log(movieList);
    // for (const id of Object.keys(moviesID)) {
    //   console.log(id);
    // }
  };

  const dataSliced = () => {
    // TC: O(N)
    return (
      Array.isArray(dataType) &&
      dataType
        .slice(1)
        .map((data) => (
          <MoviesTypeCardInfo
            key={data.id}
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
          key={data.id}
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
