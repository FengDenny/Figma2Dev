import React from "react";
import styles from "../../AccountSetting.module.scss";
import { DisplayError } from "../../../../component/Navbar/NavButtons/helper/DisplayError";
import passwordStyles from "../../../../component/Navbar/NavButtons/helper/passwordChecker.module.scss";

export default function UpdatePassword({
  newPasswordData,
  updateNewPassword,
  handleIncomingUpdatedData,
  setShowHint,
  showHint,
}) {
  return (
    <section className={styles.security}>
      <h2 className={styles.header}>Account Settings</h2>
      <div className={styles.accountInfo}>
        <div className={styles.accountUserInfo}>
          <label htmlFor='currentPassword'>Current Password</label>
          <input
            type='password'
            name='currentPassword'
            placeholder='Verify current password'
            value={newPasswordData.currentPassword}
            onChange={(event) => handleIncomingUpdatedData(event)}
          />
        </div>
        <div className={styles.accountUserInfo}>
          <label htmlFor='newPassword'>New Password</label>
          <input
            type='password'
            name='password'
            placeholder='Create a new password'
            value={newPasswordData.password}
            onChange={(event) => handleIncomingUpdatedData(event)}
          />
          <button
            className={styles.displayHintBtn}
            onClick={(e) => {
              e.preventDefault();
              setShowHint(!showHint);
            }}
          >
            Show hint
          </button>
        </div>
        <div
          className={
            showHint ? passwordStyles.showHint : passwordStyles.removeHint
          }
        >
          {DisplayError(newPasswordData, "update")}
        </div>
        <div className={styles.accountUserInfo}>
          <label htmlFor='confirmPassword'>Confirm New Password</label>
          <input
            type='password'
            name='confirmPassword'
            placeholder='Confirm your new password'
            value={newPasswordData.confirmPassword}
            onChange={(event) => handleIncomingUpdatedData(event)}
          />
        </div>
        <button
          className={styles.btnSave}
          onClick={updateNewPassword}
          disabled={
            !newPasswordData.password.match(
              /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
            )
          }
        >
          Save changes
        </button>
      </div>
    </section>
  );
}
