import React, { useState, useRef } from "react";
import styles from "./Hero.module.scss";
import global from "../../global.module.scss";
import { hero } from "../../data/hero";
import GetStartedButton from "./Button/GetStartedButton";
import animate from "../Animations/animations.module.scss";
import Animate from "../Animations/AnimateOnScroll";

export default function Hero() {
  const [visible, setVisible] = useState();
  return (
    <section className={styles.container}>
      <div className={global.container}>
        {hero.map((data) => (
          <div key={data.id} className={styles.hero}>
            <div className={styles.header}>
              <Animate
                setVisible={setVisible}
                content={
                  <h1 className={`${visible && animate.fadeTop}`}>
                    {data.header}
                  </h1>
                }
              />
              <Animate
                setVisible={setVisible}
                content={
                  <h3 className={`${visible && animate.fadeBottom}`}>
                    {data.description}
                  </h3>
                }
              />
              <Animate
                setVisible={setVisible}
                content={
                  <div
                    className={`${styles.button} ${visible && animate.opacity}`}
                  >
                    <GetStartedButton title={data.buttonTitle} />
                  </div>
                }
              />
            </div>
            <Animate
              setVisible={setVisible}
              content={
                <div
                  className={`${styles.heroImage} ${
                    visible && animate.opacity
                  }`}
                >
                  <img
                    src={require(`../../image/${data.image}`)}
                    alt={data.alt}
                  />
                </div>
              }
            />
          </div>
        ))}
      </div>
    </section>
  );
}
