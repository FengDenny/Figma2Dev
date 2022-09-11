import React, { memo, useRef, useEffect } from "react";
import CheckInViewPort from "./CheckInViewPort";
export const ScrollAnimation = memo(({ content, showClass }) => {
  const request =
    window.requestAnimationFrame ||
    window.setTimeout(function (callback) {
      callback();
    }, 100 / 60);
  const ref = useRef();
  function checkViewPort() {
    if (CheckInViewPort(ref.current)) {
      ref.current.classList.add(showClass);
    } else {
      ref.current.classList.remove(showClass);
    }
    request(checkViewPort);
  }
  useEffect(() => {
    checkViewPort();
    window.addEventListener("scroll", checkViewPort);
    return () => window.removeEventListener("scroll", checkViewPort);
    // eslint-disable-next-line
  }, []);
  return <div ref={ref}>{content}</div>;
});
