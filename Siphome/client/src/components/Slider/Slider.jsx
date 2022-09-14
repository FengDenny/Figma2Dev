import React, { memo, useState } from "react";
import "./Slider.scss";
import { Dots } from "./components/Dots/Dots";

export const Slider = memo(
  ({ slides, children, visibleItems = 3, startNumber }) => {
    const [start, setStart] = useState(startNumber);
    const isControlsVisible = slides.length > visibleItems;
    const isVisibleItems = isControlsVisible
      ? slides
          .concat(slides.slice(0, visibleItems))
          .slice(start, start + visibleItems)
      : slides;

    return (
      <div className='slider'>
        <ul className='list'>
          {isVisibleItems.map((slide) => (children ? children(slide) : null))}
        </ul>
        {isControlsVisible && (
          <div className='dotsControls'>
            <Dots
              items={slides.length}
              active={start}
              onClick={(active) => setStart(active)}
            />
          </div>
        )}
      </div>
    );
  }
);
