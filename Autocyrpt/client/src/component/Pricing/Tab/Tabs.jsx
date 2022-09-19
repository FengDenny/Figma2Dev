import React, { useState } from "react";
import styles from "./styles/Tabs.module.scss";
import TabsItem from "./TabsItem";
import TabsContent from "./TabsContent";
import { pricing, tabs } from "../../../data/pricing";
import animate from "../../Animations/animations.module.scss";

export default function Tabs() {
  const [tab, setTab] = useState(0);

  const handleClick = (itemIndex) => {
    setTab(itemIndex);
  };
  return (
    <div className={styles.container}>
      <ul className={styles.tabList}>
        {tabs.map((item, index) => (
          <div key={index}>
            <TabsItem
              handleClick={() => handleClick(index)}
              className={`${styles.tabItems} ${animate.opacity} ${
                tab === index ? styles.active : styles.notActive
              }`}
              key={item.id}
            >
              {item.title}
            </TabsItem>
          </div>
        ))}
      </ul>
      <div className={styles.tabsContentContainer}>
        <TabsContent tabID='0' activeTab={`${tab}`}>
          {pricing.map((item, index) => (
            <div
              key={index}
              className={`${styles.tabCard} ${item.id === 1 && styles.main} ${
                animate.opacity
              }`}
            >
              <h2>{item.title}</h2>
              <h3>${item.monthlyPrice}</h3>
              <h6>Per Month</h6>
              {item.offers.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
              <button className={`${item.id === 0 && styles.firstChild}`}>
                {item.buttonTitle}
              </button>
            </div>
          ))}
        </TabsContent>
        <TabsContent tabID='1' activeTab={`${tab}`}>
          {pricing.map((item, index) => (
            <div
              key={index}
              className={`${styles.tabCard} ${item.id === 1 && styles.main}`}
            >
              <h2>{item.title}</h2>
              <h3>${item.yearlyPrice}</h3>
              <h6>Per Year</h6>
              {item.offers.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
              <button className={`${item.id === 0 && styles.firstChild}`}>
                {item.buttonTitle}
              </button>
            </div>
          ))}
        </TabsContent>
      </div>
    </div>
  );
}
