import { Method, HeadersDefaults, AxiosResponse } from "axios";
import { getAxios, myAxios } from "../lib/axios";

type RequestParams = {
  method: Method;
  url: string;
  authToken?: boolean;
  values?: unknown;
  headers?: HeadersDefaults["options"];
};

export const request = async ({
  method,
  url,
  authToken = true,
  values = null,
  headers = {},
}: RequestParams): Promise<AxiosResponse> => {
  if (myAxios === undefined) {
    getAxios();
  }
  try {
    const authHeaders = authToken
      ? { Authorization: `Bearer ${localStorage.getItem("auth-token")}` }
      : {};

    const response = await myAxios.request({
      url: url,
      method: method,
      data: values,
      headers: {
        ...authHeaders,
        ...headers,
      },
    });
    return response;
  } catch (error) {
    console.error("Request failed:", error);
    throw error;
  }
};
