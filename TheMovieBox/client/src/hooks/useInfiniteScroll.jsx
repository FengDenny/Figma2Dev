import { useState, useEffect } from "react";

export const useInfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", isScrolling);
    return () => window.removeEventListener("scrolling", isScrolling);
  }, []);
  useEffect(() => {
    if (!isFetching) return;
    callback();
  }, [isFetching]);

  function isScrolling() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isFetching
    ) {
      return;
    }
    setIsFetching(true);
  }
  return [isFetching, setIsFetching];
};
