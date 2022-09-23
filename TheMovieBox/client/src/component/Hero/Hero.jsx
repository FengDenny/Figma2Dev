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

export default function Hero() {
  const getMovieResults = getMoviesEndpoint("now_playing", key, 1);
  const [result, getResult] = useState([]);
  const item = FetchSingleRequestByID(result, "610150");

  useEffect(() => {
    try {
      fetchRequest(getMovieResults, "GET", key).then((response) => {
        getResult(response.data.results);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <section className={styles.container}>
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
                  <WatchMovieButton title='Watch Movie' />
                  <ViewInfoButton title='View Info' />
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
