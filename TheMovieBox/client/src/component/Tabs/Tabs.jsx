import React, { useState, useEffect } from "react";
import styles from "./Tab.module.scss";
import global from "../../global.module.scss";
import { tabs } from "./data/tabs";
import TabsItem from "./TabsItem";
import TabsContent from "./TabsContent";
import MovieTypesData from "../MoviesType/MovieTypesData";
import Genre from "../MoviesType/Genre/Genre";

import { MovieData } from "../../api/FetchRquests/GetMovieData";

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
                {item.id === 0 && (
                  <MovieTypesData
                    dataType={MovieData("now_playing")}
                    type='now_playing'
                  />
                )}
                {item.id === 1 && (
                  <MovieTypesData
                    dataType={MovieData("popular")}
                    type='popular'
                  />
                )}
                {item.id === 2 && (
                  <MovieTypesData
                    dataType={MovieData("upcoming")}
                    type='upcoming'
                  />
                )}
                {item.id === 3 && <Genre />}
              </TabsContent>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
