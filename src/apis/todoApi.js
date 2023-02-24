import axios from 'axios';
import { API_PATH } from 'constants';
import { getUserToken } from 'utils';

const axiosConfig = {
  baseURL: `${process.env.REACT_APP_API_URL}${API_PATH.todos}`,
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
    const response = await todoInstance.post(API_PATH.root, newTodo);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getTodos = async () => {
  try {
    const response = await todoInstance.get(API_PATH.root);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateTodo = async (id, updatedTodo) => {
  try {
    const response = await todoInstance.put(`/${id}`, updatedTodo);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteTodo = async (id) => {
  try {
    await todoInstance.delete(`/${id}`);
  } catch (error) {
    console.error(error);
  }
};
