import React from "react";
import authStyles from "../auths.module.scss";

export default function LoginAuthModal({ setActive }) {
  return (
    <form className={authStyles.authForm}>
      <div className={authStyles.formInput}>
        <label htmlFor='Email'>Email</label>
        <input type='email' name='email' required />
      </div>

      <div className={authStyles.formInput}>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' required />
        <button className={authStyles.passwordReset}>Forgot password?</button>
      </div>

      <div className={authStyles.formInput}>
        <button type='button' className={authStyles.formSubmit}>
          Log in
        </button>
      </div>
      <div className={authStyles.formInput}>
        <div className={authStyles.formSwitch}>
          <h3>Need an account?</h3>
          <button
            type='button'
            onClick={() => setActive("register")}
            className={authStyles.formSwitchBtn}
          >
            Sign up
          </button>
        </div>
      </div>
    </form>
  );
}
