import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Toast } from "../../../../../toastHelper/Toast";

export default async function ResetPasswordData(email) {
  const auth = getAuth();

  return await sendPasswordResetEmail(auth, email)
    .then(() => {
      Toast("success", `Password reset link has been sent to ${email}`);
    })
    .catch((err) => {
      console.log(err.message);
    });
}
