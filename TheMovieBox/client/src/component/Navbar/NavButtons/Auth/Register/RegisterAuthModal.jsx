import React from "react";
import authStyles from "../auths.module.scss";

export default function RegisterAuthModal({
  setActive,
  handleIncomingData,
  accountData,
  clearData,
  data,
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
          type='password'
          name='password'
          value={data.password}
          onChange={(event) => handleIncomingData(event)}
          required
        />
      </div>

      <div className={authStyles.formInput}>
        <button
          type='button'
          className={authStyles.formSubmit}
          onClick={accountData}
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
