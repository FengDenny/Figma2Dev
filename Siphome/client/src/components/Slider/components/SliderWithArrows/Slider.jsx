import React, { memo, useState } from "react";
import "../../Slider.scss";
import { Dots } from "../Dots/Dots";
import { NextButton } from "../NextButton/NextButton";
import { PrevButton } from "../PrevButton/PrevButton";
export const SliderWithArrow = memo(
  ({ slides, children, visibleItems = 3, startNumber }) => {
    const [start, setStart] = useState(startNumber);
    const isControlsVisible = slides.length > visibleItems;
    const isVisibleItems = isControlsVisible
      ? slides
          .concat(slides.slice(0, visibleItems))
          .slice(start, start + visibleItems)
      : slides;

    const onNextClick = () => {
      setStart(start + 1 >= slides.length ? 0 : start + 1);
    };

    const onPrevClick = () => {
      setStart(start - 1 >= 0 ? start - 1 : slides.length - 1);
    };

    return (
      <div className='slider'>
        {isControlsVisible && (
          <PrevButton
            onClick={onPrevClick}
            className='next-button navButtons'
          />
        )}
        <ul className='list'>
          {isVisibleItems.map((slide) => (children ? children(slide) : null))}
        </ul>

        {isControlsVisible && (
          <NextButton
            onClick={onNextClick}
            className='prev-button navButtons'
          />
        )}

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
