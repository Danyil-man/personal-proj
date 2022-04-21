/* eslint-disable quotes */
import axios from "axios";

export const publicAPI = axios.create({
  baseURL: "http://localhost:5000/",
});

export const signedAPI = axios.create({
  baseURL: "http://localhost:5000/",
});

const authInner = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

signedAPI.interceptors.request.use(authInner);
