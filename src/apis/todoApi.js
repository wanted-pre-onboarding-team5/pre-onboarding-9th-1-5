import axios from 'axios';

import { getUserToken } from 'utils';

const axiosConfig = {
  baseURL: `${process.env.REACT_APP_API_URL}/todos`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const todoInstance = axios.create(axiosConfig);

todoInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = getUserToken();
    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  },
);

export const createTodo = async (newTodo) => {
  try {
    const response = await todoInstance.post('', newTodo);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getTodos = async () => {
  try {
    const response = await todoInstance.get('');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
