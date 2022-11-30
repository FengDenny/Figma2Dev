import React from "react";
import authStyles from "../auths.module.scss";

export default function LoginAuthModal({ setActive }) {
  return (
    <form className={authStyles.authForm}>
      <div className={authStyles.formInput}>
        <label htmlFor='Email'>Email</label>
        <input type='email' name='email' value='' required />
      </div>
      <div className={authStyles.formInput}>
        <label htmlFor='full_name'>Full name</label>
        <input type='text' name='full_name' value='' required />
      </div>
      <div className={authStyles.formInput}>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' value='' required />
      </div>

      <div className={authStyles.formInput}>
        <button type='submit' className={authStyles.formSubmit}>
          Log in
        </button>
      </div>
      <div className={authStyles.formInput}>
        <div className={authStyles.formSwitch}>
          <h3>Need an account?</h3>
          <button
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
