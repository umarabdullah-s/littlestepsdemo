import apiService from "./apiService";

export const submitEnquiry = (data) => {
  return apiService.post("/littlestep-enquiry", data);
};