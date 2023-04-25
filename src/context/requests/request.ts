import { BASE_URL } from "../../constants/endpoints";

export const request = async (path: string, method = "GET", data: object | null, setLoading: (param: boolean) => void) => {
  setLoading(true)
  let url = `${BASE_URL}${path}`;
  if (method === "GET" && !!data) {
    const params = new URLSearchParams(Object.entries(data));
    url += `?${params.toString()}`;
  }
  return fetch(url, {
    method,
    headers: {
      // Authorization: `Bearer ${BASE_TOKEN}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: method !== "GET" && !!data ? JSON.stringify(data) : undefined,
  })
    .then(async (response) => {
      if(response.ok) {
        const responseData = await response.json();
        if(!!responseData) {
          return responseData;
        }
      }
      return await response.json();
    }).catch((error) => {
      console.error(error)
    }).finally(() => {
      setLoading(false)
    })
};