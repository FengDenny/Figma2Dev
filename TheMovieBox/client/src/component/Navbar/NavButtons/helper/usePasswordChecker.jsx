import { useState, useEffect } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export const usePasswordChecker = (password) => {
  const [error, setError] = useState([]);

  const checkPasswordValidity = () => {
    switch (true) {
      case !password:
        return setError("");
      case password.length < 8:
      case !password.match(/[A-Z]/):
      case !password.match(/[a-z]/):
      case !password.match(/[\d`~!@#$%\^&*()+=|;:'",.<>\/?\\\-]/):
        return setError([
          {
            passwordLength: "At least 8 characters",
            uppercased: "At least 1 uppercase letter",
            lowercased: "At least one lowercase letter",
            numOrSpecialCased: "At least one number and / or special character",
          },
        ]);
      default:
        return;
    }
  };

  useEffect(() => {
    checkPasswordValidity();
  }, [password]);

  return {
    error,
    IoIosCheckmarkCircleOutline,
  };
};
