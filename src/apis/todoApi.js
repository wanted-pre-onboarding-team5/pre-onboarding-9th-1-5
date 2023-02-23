import axios from 'axios';

import { API_END_POINT, USER_TOKEN_KEY } from 'constants';

const axiosConfig = {
  baseURL: `${API_END_POINT}/todos`,
  timeout: 10000, //요청에 대한 응답에 한계를 설정하셨다고함.
  headers: {
    'Content-Type': 'application/json',
  },
};

const todoInstance = axios.create(axiosConfig);

todoInstance.interceptors.request.use((config) => {
  const token = window.localStorage.getItem(USER_TOKEN_KEY);
  config.headers.Authorization = token ? `Bearer ${token}` : null;
  return config;
});

export const postTodo = async (todo) => {
  try {
    const res = await todoInstance.post('', { todo: todo });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const getTodos = async () => {
  try {
    const res = await todoInstance.get('');
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
