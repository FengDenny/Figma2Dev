import React, { useState } from "react";
import global from "../../global.module.scss";
import styles from "./Compatibility.module.scss";
import animate from "../Animations/animations.module.scss";
import { platform } from "../../data/platform";
import Animate from "../Animations/AnimateOnScroll";

export default function Compatibility() {
  const [visible, setVisible] = useState();
  return (
    <section id='client' className={styles.container}>
      <div className={global.container}>
        <div className={styles.iconsContainer}>
          <Animate setVisible={setVisible}>
            <h2 className={visible && animate.fadeTop}>
              Works with any platform
            </h2>
          </Animate>
          <Animate setVisible={setVisible}>
            <div className={`${styles.logo} ${visible && animate.opacity}`}>
              {platform.map((item) => (
                <img
                  key={item.id}
                  className={`${item.id === 3 && styles.small}`}
                  src={require(`../../image/${item.logo}`)}
                  alt={item.company}
                />
              ))}
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}
