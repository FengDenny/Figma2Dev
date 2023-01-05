import { useEffect } from "react";

export const useStickyNavbar = (styles) => {
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const sticky = navbar.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        navbar.classList.add(`${styles.sticky}`);
      } else {
        navbar.classList.remove(`${styles.sticky}`);
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);
};
