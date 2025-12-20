import axios from "axios";

const instance = axios.create({
  baseURL: "https://greencart-server.greatstack.in",
});

instance.interceptors.request.use((config) => {
  return config;
});

instance.interceptors.response.use((config) => {
  return config;
});

export default instance;