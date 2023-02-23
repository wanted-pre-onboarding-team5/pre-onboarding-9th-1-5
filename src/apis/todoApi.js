import axios from 'axios';
import { API_END_POINT, USER_TOKEN_KEY, API_PATH } from 'constants';

const todoInstance = axios.create({
  baseURL: `${API_END_POINT + API_PATH.todos}`,
  timeout: 10000,
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

export const createTodo = (todo) => {
  return todoInstance.post('', todo);
};

export const getTodos = () => {
  return todoInstance.get('');
};

export const updateTodo = async ({ id, todo, isCompleted }) => {
  return todoInstance.put(`/${id}`, { todo, isCompleted });
};

export const deleteTodo = async ({ id }) => {
  return todoInstance.delete(`/${id}`);
};
