import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://alosodt.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;