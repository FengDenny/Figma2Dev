import React from "react";
import AccountCreationAndLoggedInfo from "../MetaData/AccountCreationAndLoggedInfo";

export default function UpdateEmailAndName({
  styles,
  email,
  displayName,
  creationTime,
  lastSignInTime,
  handleIncomingUpdatedData,
  updateAccountData,
  newData,
}) {
  return (
    <>
      <h2 className={styles.header}>Account Settings</h2>
      <div className={styles.accountInfo}>
        <div className={styles.accountUserInfo}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='newEmail'
            placeholder={email}
            value={newData.newEmail}
            onChange={(event) => handleIncomingUpdatedData(event)}
          />
        </div>
        <div className={styles.accountUserInfo}>
          <label htmlFor='name'>Full Name</label>
          <input
            type='text'
            name='newFullName'
            placeholder={displayName}
            value={newData.newFullName}
            onChange={(event) => handleIncomingUpdatedData(event)}
          />
        </div>

        <AccountCreationAndLoggedInfo
          styles={styles}
          creationTime={creationTime}
          lastSignInTime={lastSignInTime}
        />

        <button
          className={styles.btnSave}
          onClick={updateAccountData}
          disabled={!newData.email && !newData.newFullName}
        >
          Save changes
        </button>
      </div>
    </>
  );
}
