import axios from "axios";
import { Base_Api } from '../../config';
const axiosInstance = axios.create({
  baseURL: Base_Api,
});
axiosInstance.interceptors.response.use(
  (res) => res,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something Went Wrong"
    )
);
export default axiosInstance;
