import React from "react";

export default function AccountCreationAndLoggedInfo({
  styles,
  creationTime,
  lastSignInTime,
}) {
  return (
    <div className={styles.accountMetaInfo}>
      <h4 className={styles.creationStatus}>
        Created at: <span>{creationTime}</span>
      </h4>
      <h4 className={styles.loggedStatus}>
        Last logged in: <span>{lastSignInTime}</span>
      </h4>
    </div>
  );
}
