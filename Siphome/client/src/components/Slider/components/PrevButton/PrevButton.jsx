import React, { memo } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export const PrevButton = memo((props) => {
  return (
    <div {...props}>
      <FaArrowAltCircleLeft size={25} />
    </div>
  );
});
