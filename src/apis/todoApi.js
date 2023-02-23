import axios from 'axios';

import { API_END_POINT, USER_TOKEN_KEY } from 'constants';

const axiosConfig = {
  baseURL: `${API_END_POINT}`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const todoInstance = axios.create(axiosConfig);

todoInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem(USER_TOKEN_KEY);

  if (accessToken && config.headers) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});
