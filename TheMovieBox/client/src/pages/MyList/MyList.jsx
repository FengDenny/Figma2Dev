import React from "react";
import global from "../../global.module.scss";
import styles from "./myList.module.scss";

export default function MyList() {
  return (
    <section className={global.container}>
      <div className={styles.myList}>
        <div className={styles.listCard}>
          <h3>My List</h3>
        </div>
      </div>
    </section>
  );
}
