import axios from 'axios';

import { API_END_POINT } from 'constants';

const axiosConfig = {
  baseURL: `${API_END_POINT}`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const todoInstance = axios.create(axiosConfig);
