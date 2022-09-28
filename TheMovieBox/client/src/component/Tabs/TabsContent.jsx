import React from "react";
import styles from "./Tab.module.scss";

export default function TabsContent({ activeTab, tabID, children }) {
  return (
    <div
      className={`${styles.tabContent} ${
        activeTab === tabID ? styles.active : styles.notActive
      }`}
    >
      {children}
    </div>
  );
}
