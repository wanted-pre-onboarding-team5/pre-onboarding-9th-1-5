import axios from 'axios';

import { API_END_POINT, USER_TOKEN_KEY } from 'constants';

const axiosConfig = {
  baseURL: `${API_END_POINT}/todos`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const todoInstance = axios.create(axiosConfig);

todoInstance.interceptors.request.use((config) => {
  const TOKEN = localStorage.getItem(USER_TOKEN_KEY);
  if (TOKEN) {
    config.headers.Authorization = `Bearer ${TOKEN}`;
  }
  return config;
});

export const getTodos = async () => {
  try {
    const { data } = await todoInstance.get('');
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const createTodo = async (newTodo) => {
  todoInstance.headers;
  try {
    const { data } = await todoInstance.post('', { todo: newTodo });
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const updateTodo = async (id, updatedTodo) => {
  try {
    const { data } = await todoInstance.put(`/${id}`, updatedTodo);
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const deleteTodo = async (id) => {
  try {
    await todoInstance.delete(`/${id}`);
  } catch (e) {
    console.error(e);
  }
};
