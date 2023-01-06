import React from "react";
import authStyles from "../auths.module.scss";
import { DisplayError } from "../../helper/DisplayError";
import passwordStyles from "../../helper/passwordChecker.module.scss";

export default function RegisterAuthModal({
  setActive,
  handleIncomingData,
  accountData,
  data,
  AiOutlineEye,
  AiOutlineEyeInvisible,
  togglePasswordVisiblity,
  passwordShown,
  close,
  hint,
  setShowHint,
}) {
  return (
    <form className={authStyles.authForm}>
      <div className={authStyles.formInput}>
        <label htmlFor='Email'>Email</label>
        <input
          type='email'
          name='email'
          value={data.email}
          onChange={(event) => handleIncomingData(event)}
          required
        />
      </div>
      <div className={authStyles.formInput}>
        <label htmlFor='fullName'>Full name</label>
        <input
          type='text'
          name='fullName'
          value={data.fullName}
          onChange={(event) => handleIncomingData(event)}
          required
        />
      </div>

      <div className={authStyles.formInput}>
        <label htmlFor='password'>Password</label>
        <input
          type={passwordShown ? "text" : "password"}
          name='password'
          value={data.password}
          onChange={(event) => handleIncomingData(event)}
          required
        />
        <i
          className={authStyles.showPassword}
          onClick={togglePasswordVisiblity}
        >
          {passwordShown ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </i>
        <button
          className={authStyles.displayHintBtn}
          onClick={(e) => {
            e.preventDefault();
            setShowHint(!hint);
          }}
        >
          Show hint
        </button>
      </div>

      <div
        className={hint ? passwordStyles.showHint : passwordStyles.removeHint}
      >
        {DisplayError(data)}
      </div>

      <div className={authStyles.formInput}>
        <button
          type='button'
          className={authStyles.formSubmit}
          onClick={() => {
            accountData();
            close();
          }}
          disabled={
            !data.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
          }
        >
          Sign up
        </button>
      </div>
      <div className={authStyles.formInput}>
        <div className={authStyles.formSwitch}>
          <h3>Have an account?</h3>
          <button
            onClick={() => setActive("login")}
            className={authStyles.formSwitchBtn}
          >
            Log in
          </button>
        </div>
      </div>
    </form>
  );
}
