import React from "react";
import styles from "./Tab.module.scss";
import tabStyles from "../../pages/AccountSetting/SettingTabs/Tabs.module.scss";

export default function TabsContent({ auth, activeTab, tabID, children }) {
  return (
    <div
      className={`${auth ? tabStyles.tabContent : styles.tabContent} ${
        activeTab === tabID && auth ? tabStyles.active : tabStyles.notActive
      }

      ${activeTab === tabID ? styles.active : styles.notActive}
      `}
    >
      {children}
    </div>
  );
}
