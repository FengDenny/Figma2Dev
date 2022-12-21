import React, { useEffect, useState, useRef } from "react";
import global from "../../global.module.scss";
import styles from "./myList.module.scss";
import MyListData from "./MyListData";
import { collection, doc, query, where, onSnapshot } from "firebase/firestore";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { database } from "../../firebase/firebaseConfig";

export default function MyList() {
  const [userID, setUserID] = useState();
  const [docID, setDocID] = useState();
  const [listDoc, setListDoc] = useState([]);

  const isMounted = useRef(true);
  const auth = getAuth();

  useEffect(() => {
    const getListDoc = () => {
      const filteredListRef = doc(database, "lists", `${docID}`);
      onSnapshot(filteredListRef, (results) => {
        setListDoc({ id: results.id, ...results.data() });
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

  return (
    <section className={global.container}>
      <div className={styles.myList}>
        <h3>My List</h3>
        <div className={styles.listCard}>
          <div className={global.gridWrapper}>
            {listDoc.movies === undefined ? (
              <h2>Add a movie to your list.</h2>
            ) : (
              listDoc.movies.map((data) => {
                const {
                  id,
                  title,
                  release_date,
                  backdrop_path,
                  genre_ids,
                  vote_average,
                } = data;
                return (
                  <MyListData
                    key={id}
                    movieID={id}
                    title={title}
                    release_date={release_date}
                    backdrop_path={backdrop_path}
                    genre_ids={genre_ids}
                    vote_average={vote_average}
                    item={data}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
