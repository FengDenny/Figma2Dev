import React from "react";
import styles from "./Benefits.module.scss";
import global from "../../global.module.scss";
import { benefits } from "../../data/benefits";
export default function Benefits() {
  return (
    <section className={styles.container}>
      <div className={global.container}>
        <div className={styles.rectangle}>
          {benefits.map((data) => (
            <div key={data.id} className={styles.rectangleItems}>
              <div className={styles.imgContainer}>
                <img
                  src={require(`../../image/${data.icon}`)}
                  alt={data.title}
                />
              </div>
              <h2>{data.title}</h2>
              <div className={styles.greenLine} />
              <p>{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
