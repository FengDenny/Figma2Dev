import React from "react";
import styles from "./Star.module.scss";
import { FaRegStar, FaStarHalfAlt, FaStar } from "react-icons/fa";

export default function Star({
  selectedStars,
  totalStars = 10,
  title,
  totalReview,
  votes,
}) {
  const firstMethod = () => {
    return [...Array(totalStars)].map((el, i) =>
      i < selectedStars ? <FaStar key={i} /> : <FaRegStar key={i} />
    );
  };

  const secondMethod = () => {
    // implement the code for full, empty and half stars here.
    return [...Array(totalStars)].map((el, i) =>
      // check if current star should be half
      i < selectedStars && i + 1 > selectedStars ? (
        <FaStarHalfAlt key={i} />
      ) : // check if current star should be full
      i < selectedStars ? (
        <FaStar key={i} />
      ) : (
        // else, current star should be empty
        <FaRegStar key={i} />
      )
    );
  };

  return (
    <div className={styles.star}>
      <h4>
        {title}
        <span> {totalReview}</span>
      </h4>
      <p>
        {Number.isInteger(selectedStars) ? firstMethod() : secondMethod()}
        <span className={styles.starTotal}>
          {votes}/{totalStars}
        </span>
      </p>
    </div>
  );
}
