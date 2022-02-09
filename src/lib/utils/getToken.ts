export const getTokenFromLocalstorage = () => {
  const tokenStr = localStorage.getItem("token");
  if (tokenStr) {
    return JSON.parse(tokenStr)?.token as string;
  }
  return "";
};
