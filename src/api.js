import axios from 'axios';
import GetBaseUrl from './conf';

// Create a new instance of Axios
const axiosInstance = axios.create({
  baseURL: GetBaseUrl(), // Set your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add any additional request headers or modifications here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Handle successful response here
    return response;
  },
  (error) => {
    // Handle error response here
    if (error.response && error.response.status === 401) {
      // Handle unauthorized error (e.g., redirect to login page)
    } else if (error.response && error.response.status === 403) {
      // Handle forbidden error
    } else if (error.response && error.response.status === 404) {
      // Handle not found error
    } else {
      // Handle other errors
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;