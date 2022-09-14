import React, { memo } from "react";
import "./Dots.scss";
import classNames from "classnames";
export const Dots = memo(({ items, active, onClick }) => {
  return (
    <ul className='dotList'>
      {Array.from(Array(items).keys())
        .map((dot) => (
          <li
            key={dot}
            className={classNames("dot", {
              ["active"]: active === dot,
            })}
            onClick={() => onClick(dot)}
          />
        ))
        .splice(0, active + 3)}
    </ul>
  );
});
