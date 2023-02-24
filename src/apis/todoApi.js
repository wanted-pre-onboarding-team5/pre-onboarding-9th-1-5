import axios from 'axios';
import { PATH_API } from 'constants';
import { getUserToken } from 'utils';

const axiosConfig = {
  baseURL: `${process.env.REACT_APP_API_URL}${PATH_API.todos}`,
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
    const response = await todoInstance.post(PATH_API.root, newTodo);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getTodos = async () => {
  try {
    const response = await todoInstance.get(PATH_API.root);
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
