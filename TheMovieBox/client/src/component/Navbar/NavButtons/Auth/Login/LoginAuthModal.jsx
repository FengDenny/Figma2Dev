import React from "react";
import authStyles from "../auths.module.scss";
import { useNavigate } from "react-router-dom";

export default function LoginAuthModal({
  setActive,
  handleIncomingData,
  accountData,
  data,
  AiOutlineEye,
  AiOutlineEyeInvisible,
  togglePasswordVisiblity,
  passwordShown,
  close,
  mobile,
}) {
  const navigate = useNavigate();
  return (
    <form className={authStyles.authForm}>
      <div className={authStyles.formInput}>
        <label htmlFor='Email'>Email</label>
        <input
          type='email'
          name='email'
          value={data.email}
          onChange={(event) => handleIncomingData(event)}
        />
      </div>

      <div className={authStyles.formInput}>
        <label htmlFor='password'>Password</label>
        <input
          type={passwordShown ? "text" : "password"}
          name='password'
          value={data.password}
          onChange={(event) => handleIncomingData(event)}
        />
        <button
          className={authStyles.passwordReset}
          onClick={() => navigate("/reset-password")}
        >
          Forgot password?
        </button>
        <i
          className={authStyles.showPassword}
          onClick={togglePasswordVisiblity}
        >
          {passwordShown ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </i>
      </div>

      <div className={authStyles.formInput}>
        <button
          type='button'
          className={authStyles.formSubmit}
          onClick={() => {
            accountData();

            mobile && close();
          }}
          disabled={!data.email || !data.password}
        >
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
