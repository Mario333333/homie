import axios, { AxiosInstance } from "axios";
const currentPath: Location = window.location;

const instance: AxiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? `${currentPath.protocol}//${currentPath.hostname}:3000/`
      : `${currentPath.protocol}//${currentPath.hostname}:${currentPath.port}/`,
});

export default instance;
