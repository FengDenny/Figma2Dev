import React, { useState, useEffect } from "react";
import styles from "./Tab.module.scss";
import global from "../../global.module.scss";
import { tabs } from "./data/tabs";
import TabsItem from "./TabsItem";
import TabsContent from "./TabsContent";
import NowPlaying from "../MoviesType/Trending/NowPlaying";
import Popular from "../MoviesType/Popular/Popular";
import Upcoming from "../MoviesType/Upcoming/Upcoming";
import Genre from "../MoviesType/Genre/Genre";

export default function Tabs() {
  const [tab, setTab] = useState(0);

  const handleClick = (itemIndex) => {
    setTab(itemIndex);
  };

  return (
    <section className={styles.container}>
      <div className={global.container}>
        <div className={styles.HLine}>
          <ul className={styles.tabList}>
            {tabs.map((item, index) => (
              <TabsItem
                className={`${styles.tabItems} ${
                  tab === index ? styles.active : ""
                }`}
                handleClick={() => handleClick(index)}
                key={item.id}
              >
                {item.title}
              </TabsItem>
            ))}
          </ul>
          <div className={styles.tabsContentContainer}>
            {tabs.map((item, index) => (
              <TabsContent
                tabID={`${item.id}`}
                activeTab={`${tab}`}
                key={index}
              >
                {item.id === 0 && <NowPlaying />}
                {item.id === 1 && <Popular />}
                {item.id === 2 && <Upcoming />}
                {item.id === 3 && <Genre />}
              </TabsContent>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
