import axios, { AxiosInstance, AxiosResponse } from "axios";
import { BASE_URL_API } from "../constants";
import { isEmpty } from "../functions";

const instance: AxiosInstance = axios.create({
    baseURL: BASE_URL_API,
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
});

instance.interceptors.request.use(
    async (config) => {
      const token = localStorage.getItem('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    (err) => {
      return Promise.reject(err);
    }
);

instance.interceptors.response.use(
    async (response: AxiosResponse): Promise<any> => {
      const { data } = response;
      const { common, ...result } = data
  
      return Promise.resolve(result);
    },
    (err) => {
      return Promise.reject(err);
    }
);

export const get = async (url: string, params: any = {}): Promise<any> => {
    return await instance.get(url, { params });
};

export const post = async (url: string, data?: object | File): Promise<any> => {
    const formData = new FormData();
    if (data instanceof File) {
      formData.set("file_0", data);
    } else {
      if (!isEmpty(data)) {
        formData.set("requestBody", JSON.stringify({ ...data }));
      }
    }
  
    return await instance.post(url, formData);
};