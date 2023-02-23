import axios from 'axios';

import { STORAGE } from 'constants';

const axiosConfig = {
  baseURL: `${process.env.REACT_APP_API_URL}/todos`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};

const todoInstance = axios.create(axiosConfig);
todoInstance.interceptors.request.use(setTokenConfig);

function setTokenConfig(config) {
  const token = localStorage.getItem(STORAGE.authToken);
  config.headers.Authorization = token ? `Bearer ${token}` : null;
  return config;
}

export const getTodos = async () => {
  try {
    const response = await todoInstance.get('/');
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const createTodo = async (todo) => {
  try {
    const response = await todoInstance.post('/', { todo });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
