import React from "react";
import styles from "./Benefits.module.scss";
import global from "../../global.module.scss";
import { benefits } from "../../data/benefits";
import animate from "../Animations/animations.module.scss";
export default function Benefits() {
  return (
    <section id='benefits' className={styles.container}>
      <div className={global.container}>
        <div className={styles.rectangle}>
          {benefits.map((data) => (
            <div key={data.id} className={styles.rectangleItems}>
              <div className={`${styles.imgContainer} ${animate.fadeTop}`}>
                <img
                  src={require(`../../image/${data.icon}`)}
                  alt={data.title}
                />
              </div>
              <h2 className={animate.fadeLeft}>{data.title}</h2>
              <div className={`${styles.greenLine} ${animate.fadeLeft}`} />
              <p className={animate.fadeBottom}>{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
