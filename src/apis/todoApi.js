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
  const token = localStorage.getItem(STORAGE.userToken);
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

export const createTodo = async (newTodoText) => {
  try {
    const response = await todoInstance.post('/', { todo: newTodoText });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const updateTodo = async (todo) => {
  try {
    const response = await todoInstance.put(`/${todo.id}`, todo);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const deleteTodo = async (todoId) => {
  try {
    await todoInstance.delete(`/${todoId}`);
  } catch (err) {
    console.error(err);
  }
};
