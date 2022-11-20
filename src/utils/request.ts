import axios from 'axios';
import { BASE_URL } from '@/services/url-path';

const request = axios.create({
  baseURL: BASE_URL, //
});
request.interceptors.request.use(
  (memo: any) => {
    return memo;
  },
  (error) => {
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  (response) => {
    const res: any = response.data;
    return res;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export const baseRequestGet = (url: string, params) =>
  request({ url, method: 'get', params });

export const baseRequestPost = (url: string, data) =>
  request({ url, method: 'post', data });

export default request;
