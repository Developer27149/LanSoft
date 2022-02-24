import { requestApi } from "../lib/utils/requests";

export const postData = async (url: string, body: { [k: string]: string }) => {
  const newUrl = requestApi(url);
  console.log("new url is:", newUrl);

  const resp = await fetch(newUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      ...body,
    },
  });
  return resp.json();
};
