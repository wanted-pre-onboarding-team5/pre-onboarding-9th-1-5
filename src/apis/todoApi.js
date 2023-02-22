import axios from 'axios';

import { API_END_POINT, USER_TOKEN_KEY } from 'constants';

const token = localStorage.getItem(USER_TOKEN_KEY);

const axiosConfig = {
  baseURL: `${API_END_POINT}/todos`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: token ? `Bearer ${token}` : null,
  },
};

const todoInstance = axios.create(axiosConfig);

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
