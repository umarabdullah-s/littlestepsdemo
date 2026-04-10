import apiService from "./apiService";

export const submitEnquiry = (data) => {
  return apiService.post(`/littlestep-enquiry`, data);
};
export const getEnquiryList = (page = 1) => {
  return apiService.get(`/littlestep-enquiry?page=${page}`);
};