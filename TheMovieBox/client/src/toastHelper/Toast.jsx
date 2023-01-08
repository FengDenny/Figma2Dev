import { toast } from "react-toastify";

export const Toast = (status, data) => {
  console.log(status);
  return status === "error"
    ? toast.error(data.split("/")[1].slice(0, -2))
    : toast.success(data);
};
export const UpdateToast = (status, data) => {
  console.log(status);
  return status === "error" ? toast.error(data) : toast.success(data);
};
