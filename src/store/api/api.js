/* eslint-disable quotes */
import axios from "axios";

export const instanceAPI = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json",
  },
});

const publicAPI = axios.create({
  baseURL: "http://localhost:5000/",
});

const signedAPI = axios.create({
  baseURL: "http://localhost:5000/",
});

const authInner = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

signedAPI.interceptors.request.use(authInner);

export { publicAPI, signedAPI };
