import React, { useState, memo } from "react";
import styles from "./Slider.module.scss";
import { Dots } from "./component/Dots/Dots";

export const Slider = memo(({ slides, children, visibleItems = 2 }) => {
  const [start, setStart] = useState(0);
  const isControlVisible = slides.length > visibleItems;

  const isVisibleItems = isControlVisible
    ? slides.concat().slice(start, start + visibleItems)
    : slides;

  return (
    <div className={styles.slider}>
      <ul className={styles.list}>
        {isVisibleItems.map((slide) => (children ? children(slide) : null))}
      </ul>
      {isControlVisible && (
        <div className={styles.dotsControls}>
          <Dots
            items={slides.length}
            active={start}
            onClick={(active) => setStart(active)}
          />
        </div>
      )}
    </div>
  );
});
