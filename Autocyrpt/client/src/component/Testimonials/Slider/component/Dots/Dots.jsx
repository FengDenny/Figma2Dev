import React, { memo } from "react";
import styles from "./Dots.module.scss";
import classNames from "classnames";

export const Dots = memo(({ items, active, onClick }) => {
  return (
    <ul className={styles.dotList}>
      {Array.from(Array(items).keys()).map((dot) => (
        <li
          key={dot}
          className={classNames(`${styles.dot}`, {
            [styles.active]: active === dot,
          })}
          onClick={() => onClick(dot)}
        />
      ))}
    </ul>
  );
});
