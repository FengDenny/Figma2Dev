import React, { useState } from "react";
import styles from "./Benefits.module.scss";
import global from "../../global.module.scss";
import { benefits } from "../../data/benefits";
import animate from "../Animations/animations.module.scss";
import Animate from "../Animations/AnimateOnScroll";
export default function Benefits() {
  const [visible, setVisible] = useState();

  return (
    <section id='benefits' className={styles.container}>
      <div className={global.container}>
        <div className={styles.rectangle}>
          {benefits.map((data) => (
            <div key={data.id} className={styles.rectangleItems}>
              <Animate setVisible={setVisible}>
                <div
                  className={`${styles.imgContainer} ${
                    visible && animate.fadeTop
                  }`}
                >
                  <img
                    src={require(`../../image/${data.icon}`)}
                    alt={data.title}
                  />
                </div>
              </Animate>

              <Animate setVisible={setVisible}>
                <h2 className={visible && animate.fadeLeft}>{data.title}</h2>
              </Animate>

              <Animate setVisible={setVisible}>
                <div
                  className={`${styles.greenLine} ${
                    visible && animate.fadeLeft
                  }`}
                />
              </Animate>

              <Animate setVisible={setVisible}>
                <p className={visible && animate.fadeBottom}>
                  {data.description}
                </p>
              </Animate>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
