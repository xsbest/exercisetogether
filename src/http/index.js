import axios from "axios";

const request = axios.create({
  baseURL: "http://175.178.45.226:8080",
  timeout: 100000,
});

request.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.common.Authorization = token;
  }
  return req;
});

export default request;
