import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import styles from "./ScrollTopArrow.module.scss";

const ScrollTopArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return function cleanup() {
      window.removeEventListener("scroll", checkScrollTop);
    };
  });

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FaArrowCircleUp
      className={`${styles.scrollTop} ${
        showScroll ? styles.show : styles.none
      }`}
      onClick={scrollTop}
    />
  );
};

export default ScrollTopArrow;
