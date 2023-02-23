import axios from 'axios';
import { API_END_POINT, USER_TOKEN_KEY } from 'constants';

const todoInstance = axios.create({
  baseURL: `${API_END_POINT}/todos`,
  headers: {
    'Content-Type': 'application/json',
  },
});

todoInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem(USER_TOKEN_KEY);

  if (accessToken && config.headers) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export const createTodo = async (todo) => {
  try {
    const response = await todoInstance.post('', todo);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getTodos = async () => {
  try {
    const response = await todoInstance.get();
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
