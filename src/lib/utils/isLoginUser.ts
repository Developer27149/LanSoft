import type { LocalStorageToken } from "lib/types/index";

export const isLoginUser = () => {
  const tokenStr = localStorage.getItem("token");
  if (tokenStr === null) return false;
  const { deadlineDate } = JSON.parse(
    localStorage.getItem("token") as string
  ) as LocalStorageToken;
  return new Date().getTime() < deadlineDate;
};
