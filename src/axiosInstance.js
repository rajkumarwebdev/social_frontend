import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://172.17.31.131:3001",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});
export default axiosInstance;
