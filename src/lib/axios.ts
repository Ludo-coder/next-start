import axios, { Axios } from "axios";

export const getAxios = () => {
  controller = new AbortController();
  myAxios = axios;
  myAxios.defaults.signal = controller.signal;
  myAxios.defaults.baseURL = process.env.NEXT_PUBLIC_API_HOST;
};

export let myAxios: Axios;
export let controller: AbortController;
