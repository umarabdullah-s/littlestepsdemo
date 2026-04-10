import axiosInstance from "./axiosInstance";

const apiService = {
  post: (url, data = {}) => {
    return axiosInstance.post(url, data);
  },
};

export default apiService;