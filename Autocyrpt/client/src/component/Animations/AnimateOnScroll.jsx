import React, { useLayoutEffect, useRef } from "react";

export default function AnimateOnScroll({ setVisible, children }) {
  const ref = useRef();
  useLayoutEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setVisible(entry.isIntersecting);
    });
    observer.observe(ref.current);
  }, []);

  return <div ref={ref}>{children}</div>;
}
