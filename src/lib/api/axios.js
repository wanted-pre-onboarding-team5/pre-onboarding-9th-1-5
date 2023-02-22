import axios from 'axios';
import { getAuthToken } from '../utils/authToken';

axios.defaults.baseURL = 'https://pre-onboarding-selection-task.shop/';

axios.defaults.headers.common.Authorization = `Bearer ${getAuthToken()}`;

export const setHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export default axios;
