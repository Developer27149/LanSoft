export const requestApi = (apiUrl: string) => {
  return `${process.env.HOST}/api/${apiUrl}`;
};
