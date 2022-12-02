import React from "react";
import { useSelector } from "react-redux";
import global from "../../global.module.scss";
import styles from "./AccountSetting.module.scss";

export default function AccountSettings() {
  const { userData } = useSelector((state) => ({ ...state }));
  const { userInfo, metadata } = userData;
  const { email, displayName } = userInfo;
  const { creationTime, lastSignInTime } = metadata;

  console.log(userData);
  return (
    <section className={global.container}>
      <div className={styles.settings}>
        <h2 className={styles.header}>Account Settings</h2>
        <div className={styles.accountInfo}>
          <div className={styles.accountUserInfo}>
            <h4>Email: {email}</h4>
            <h4>Full name: {displayName}</h4>
          </div>
          <div className={styles.accountMetaInfo}>
            <h4> CreatedAt: {creationTime}</h4>
            <h4> Last Logged In: {lastSignInTime}</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
