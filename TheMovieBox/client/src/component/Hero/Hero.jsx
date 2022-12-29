import React, { useState, useEffect } from "react";
import styles from "./Hero.module.scss";
import global from "../../global.module.scss";
import Star from "./StarRating/Star";
import ViewInfoButton from "./Buttons/ViewInfoButton";
import Trailer from "../Trailer/Trailer";
import FetchSingleRequestByID from "../../api/FetchRquests/FetchSingleRequestByID";
import { fetchRequest } from "../../api/FetchRquests/FetchRequest";
import { getMoviesEndpoint } from "../../api/endpoint/movies";
import { key } from "../../api/TMBDKey.js";

import { openHeroModal, closeModal } from "../Modal/ModalHelper/ModalHelpers";
import { ModalHeroShow } from "../Modal/ModalShow";

export default function Hero() {
  const getMovieResults = getMoviesEndpoint("now_playing", key, 1);
  const [result, setResult] = useState([]);
  const [firstItem, setFirstItem] = useState({});
  const [showModal, setShowModal] = useState(false);

  let item = FetchSingleRequestByID(result, firstItem.id);

  useEffect(() => {
    try {
      fetchRequest(getMovieResults, "GET", key).then((response) => {
        setResult(response.data.results);
        setFirstItem(response.data.results[0]);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <section>
      <div className={styles.hero}>
        {item.map((data) => {
          return (
            <div key={data.id}>
              <div className={styles.trailerContainer}>
                <Trailer data={data} />
              </div>
              <div
                key={data.id}
                className={`${global.container} ${styles.flexHeader} `}
              >
                <div className={styles.header}>
                  <ViewInfoButton
                    title='View Info'
                    handleClick={() => openHeroModal(setShowModal, showModal)}
                  />
                  {
                    <ModalHeroShow
                      showModal={showModal}
                      closeModal={() => closeModal(setShowModal)}
                      data={data}
                    />
                  }
                </div>
                <Star
                  title='Rating'
                  totalReview={`based on ${data.vote_count} reviews`}
                  selectedStars={data.vote_average}
                  votes={data.vote_average}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
