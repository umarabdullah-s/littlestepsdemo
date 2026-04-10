import apiService from "./apiService";


// 🔥 Enquiry API
// 🔹 Enquiry (Website Form)

export const submitEnquiry = (data) => {
  return apiService.post(`/littlestep-enquiry`, data);
};
// 🔹 Get Enquiry List
export const getEnquiryList = () => {
  return apiService.get(`/littlestep-enquiry`);
};