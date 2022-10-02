import React, { useState, useEffect } from "react";
import styles from "./Hero.module.scss";
import global from "../../global.module.scss";
import Star from "./StarRating/Star";
import ViewInfoButton from "./Buttons/ViewInfoButton";
import WatchMovieButton from "./Buttons/WatchMovieButton";
import FetchSingleRequestByID from "../../api/FetchRquests/FetchSingleRequestByID";
import { fetchRequest } from "../../api/FetchRquests/FetchRequest";
import { getMoviesEndpoint } from "../../api/endpoint/movies";
import { getImage } from "../../api/endpoint/image";
import { key } from "../../api/TMBDKey.js";
import Modal from "../Modal/Modal";
import AnimationStyles from "../Modal/Animations.module.scss";
import HeroInfo from "./HeroInfo";

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

  const handleClick = () => {
    setShowModal(!showModal);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <section>
      <div className={styles.hero}>
        {item.map((data) => {
          const imageBg = getImage(data.backdrop_path);
          return (
            <div key={data.id}>
              <img src={imageBg} alt={data.title} />

              <div
                key={data.id}
                className={`${global.container} ${styles.flexHeader} `}
              >
                <div className={styles.header}>
                  <h2>{data.title}</h2>
                  <div className={styles.flexHeader}>
                    <h5>
                      Original language: <span>{data.original_language}</span>
                    </h5>
                    <h5>
                      Release date:
                      <span className={styles.spanTwo}>
                        {data.release_date}
                      </span>
                    </h5>
                  </div>
                  <WatchMovieButton title='Watch Trailer' />
                  <ViewInfoButton title='View Info' handleClick={handleClick} />
                  {showModal && (
                    <div className={styles.darkBG}>
                      <Modal
                        show={showModal}
                        className={styles.heroModal}
                        activeStyle={AnimationStyles.active}
                        hiddenStyle={AnimationStyles.hiddenStyle}
                        handleClose={handleClose}
                        headerClass={styles.modalHeader}
                        title={data.title}
                      >
                        <HeroInfo data={data} />
                      </Modal>
                    </div>
                  )}
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
