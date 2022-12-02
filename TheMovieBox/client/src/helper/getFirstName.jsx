import { useSelector } from "react-redux";

export const GetFirstName = () => {
  const { userData } = useSelector((state) => ({ ...state }));
  const { displayName } = userData.userInfo;
  const firstName = displayName?.split(" ")[0];
  return firstName;
};
