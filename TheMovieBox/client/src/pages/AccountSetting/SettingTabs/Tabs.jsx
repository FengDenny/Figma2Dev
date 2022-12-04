import React, { useState } from "react";
import tabStyles from "./Tabs.module.scss";
import TabsItem from "../../../component/Tabs/TabsItem";
import TabsContent from "../../../component/Tabs/TabsContent";
import { AccountSettingTabs } from "../../../component/Tabs/data/tabs";
import UpdateEmailAndPassword from "../SettingTabs/General/UpdateEmailAndPassword";

import UpdatePassword from "../SettingTabs/Security/UpdatePassword";
export default function Tabs({
  styles,
  email,
  displayName,
  creationTime,
  lastSignInTime,
  handleIncomingUpdatedData,
  updateAccountData,
  newData,
}) {
  const [tab, setTab] = useState(0);

  const handleClick = (itemIndex) => {
    setTab(itemIndex);
  };

  return (
    <div className={tabStyles.container}>
      <ul className={tabStyles.tabList}>
        {AccountSettingTabs.map((item, index) => (
          <TabsItem
            className={`
            ${tabStyles.tabItems}
            ${tab === index ? tabStyles.active : ""}`}
            handleClick={() => handleClick(index)}
            key={index}
          >
            {item.title}
          </TabsItem>
        ))}
      </ul>
      <div className={tabStyles.tabsContentContainer}>
        {AccountSettingTabs.map((item, index) => (
          <TabsContent
            auth
            tabID={`${item.id}`}
            activeTab={`${tab}`}
            key={index}
          >
            {item.id === 0 && (
              <UpdateEmailAndPassword
                styles={styles}
                email={email}
                displayName={displayName}
                creationTime={creationTime}
                lastSignInTime={lastSignInTime}
                handleIncomingUpdatedData={handleIncomingUpdatedData}
                updateAccountData={updateAccountData}
                newData={newData}
              />
            )}
            {item.id === 1 && <UpdatePassword styles={styles} />}
          </TabsContent>
        ))}
      </div>
    </div>
  );
}
