import React from "react";
import authStyles from "../auths.module.scss";

export default function RegisterAuthModal({ setActive }) {
  return (
    <form className={authStyles.authForm}>
      <div className={authStyles.formInput}>
        <label htmlFor='Email'>Email</label>
        <input type='email' name='email' value='' required />
      </div>

      <div className={authStyles.formInput}>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' value='' required />

        <button className={authStyles.passwordReset}>Forgot password?</button>
      </div>

      <div className={authStyles.formInput}>
        <button type='submit' className={authStyles.formSubmit}>
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
