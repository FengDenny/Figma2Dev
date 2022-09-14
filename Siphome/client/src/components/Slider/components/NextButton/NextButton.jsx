import React, { memo } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
export const NextButton = memo((props) => {
  return (
    <div {...props}>
      <FaArrowAltCircleRight size={25} />
    </div>
  );
});
