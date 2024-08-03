// axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://free-ap-south-1.cosmocloud.io/development/api/',
  headers: {
    'Content-Type': 'application/json',
    'projectId': '66adb92edcc7e8fe1dcdb974',
    'environmentId': '66adb92edcc7e8fe1dcdb975'
  }
});

export default axiosInstance;
