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
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getTodos = async () => {
  try {
    const response = await todoInstance.get();
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const updateTodo = async ({ id, todo, isCompleted }) => {
  try {
    const response = await todoInstance.put(`/${id}`, { todo, isCompleted });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const deleteTodo = async ({ id }) => {
  try {
    const response = await todoInstance.delete(`/${id}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};
