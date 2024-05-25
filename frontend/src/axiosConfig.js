import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const axiosConfig = axios.create({
  baseURL: `${baseURL}`
});

export default axiosConfig;