import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default async function ResetPasswordData(email) {
  const auth = getAuth();

  return await sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log(`Password reset link has been sent to ${email}`);
    })
    .catch((err) => {
      console.log(err);
    });
}
