import React from "react";
import styles from "../../AccountSetting.module.scss";

export default function UpdatePassword({
  password,
  currentPassword,
  confirmPassword,
}) {
  return (
    <div className={styles.settings}>
      <h2 className={styles.header}>Account Settings</h2>
      <div className={styles.accountInfo}>
        <div className={styles.accountUserInfo}>
          <label htmlFor='password'>Current Password</label>
          <input
            type='password'
            name='password'
            placeholder='Enter current password'
          />
        </div>
        <div className={styles.accountUserInfo}>
          <label htmlFor='newPassword'>New Password</label>
          <input
            type='password'
            name='newPassword'
            placeholder='Create a new password'
          />
        </div>
        <div className={styles.accountUserInfo}>
          <label htmlFor='confirmPassword'>Confirm New Password</label>
          <input
            type='password'
            name='confirmPassword'
            placeholder='Confirm your new password'
          />
        </div>
        <button className={styles.btnSave}>Save changes</button>
      </div>
    </div>
  );
}
