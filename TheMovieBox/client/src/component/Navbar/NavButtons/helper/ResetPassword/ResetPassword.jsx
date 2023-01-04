import React, { useState } from "react";
import ResetPasswordData from "./ResetPasswordData";
import global from "../../../../../global.module.scss";
import resetStyle from "../../helper/ResetPassword/reset.module.scss";
export default function ResetPassword() {
  const [email, setEmail] = useState("");

  return (
    <div className={global.container}>
      <div className={resetStyle.resetContainer}>
        <form className={resetStyle.authForm}>
          <div className={resetStyle.header}>
            <h4>Forgot password?</h4>
            <span>
              Enter your email address and we'll send you a link to set your new
              password.
            </span>
          </div>
          <div className={resetStyle.formInput}>
            <label htmlFor='Email'>Email</label>
            <input
              type='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={resetStyle.formInput}>
            <button
              type='button'
              className={resetStyle.formSubmit}
              onClick={() => ResetPasswordData(email)}
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
