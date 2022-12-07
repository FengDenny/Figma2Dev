import React from "react";
import styles from "../../AccountSetting.module.scss";

export default function UpdatePassword({
  newPasswordData,
  updateNewPassword,
  handleIncomingUpdatedData,
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
            name='newPassword'
            placeholder='Create a new password'
            value={newPasswordData.newPassword}
            onChange={(event) => handleIncomingUpdatedData(event)}
          />
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
        <button className={styles.btnSave} onClick={updateNewPassword}>
          Save changes
        </button>
      </div>
    </section>
  );
}
