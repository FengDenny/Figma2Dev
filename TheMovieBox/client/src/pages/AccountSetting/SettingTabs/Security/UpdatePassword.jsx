import React from "react";
import styles from "../../AccountSetting.module.scss";
import { DisplayError } from "../../../../component/Navbar/NavButtons/helper/DisplayError";
import passwordStyles from "../../../../component/Navbar/NavButtons/helper/passwordChecker.module.scss";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function UpdatePassword({
  newPasswordData,
  updateNewPassword,
  handleIncomingUpdatedData,
  setShowHint,
  showHint,
  togglePasswordVisiblity,
  toggleConfirmPasswordVisiblity,
  passwordShown,
  confirmPasswordShown,
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
            type={passwordShown ? "text" : "password"}
            name='password'
            placeholder='Create a new password'
            value={newPasswordData.password}
            onChange={(event) => handleIncomingUpdatedData(event)}
          />
          <i className={styles.showPassword} onClick={togglePasswordVisiblity}>
            {passwordShown ? (
              <AiOutlineEye className={styles.active} />
            ) : (
              <AiOutlineEyeInvisible className={styles.notActive} />
            )}
          </i>
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
            type={confirmPasswordShown ? "text" : "password"}
            name='confirmPassword'
            placeholder='Confirm your new password'
            value={newPasswordData.confirmPassword}
            onChange={(event) => handleIncomingUpdatedData(event)}
          />
          <i
            className={styles.showPassword}
            onClick={toggleConfirmPasswordVisiblity}
          >
            {confirmPasswordShown ? (
              <AiOutlineEye className={styles.active} />
            ) : (
              <AiOutlineEyeInvisible className={styles.notActive} />
            )}
          </i>
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
