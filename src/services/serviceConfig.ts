import axios from "axios";

import { TApiBaseReturn } from "../models/modelServices";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const instance = axios.create({
  baseURL: BASE_URL,
});

const axiosMethods: TApiBaseReturn = {
  get: (url, config) => instance.get(url, config),
  post: (url, body, config) => instance.post(url, body, config),
  patch: (url, body, config) => instance.post(url, body, config),
  put: (url, body, config) => instance.put(url, body, config),
  delete: (url, config) => instance.delete(url, config),
};

export default axiosMethods;
