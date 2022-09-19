import React from "react";
import global from "../../global.module.scss";
import styles from "./Compatibility.module.scss";
import animate from "../Animations/animations.module.scss";
import { platform } from "../../data/platform";
export default function Compatibility() {
  return (
    <section id='client' className={styles.container}>
      <div className={global.container}>
        <div className={styles.iconsContainer}>
          <h2 className={animate.fadeTop}>Works with any platform</h2>
          <div className={`${styles.logo} ${animate.opacity}`}>
            {platform.map((item) => (
              <img
                key={item.id}
                className={`${item.id === 3 && styles.small}`}
                src={require(`../../image/${item.logo}`)}
                alt={item.company}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
