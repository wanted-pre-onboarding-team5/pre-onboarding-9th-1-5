import React from 'react';

import axios from 'axios';

import { API_END_POINT, USER_TOKEN_KEY } from 'constants';

const axiosConfig = {
  baseURL: `${API_END_POINT}/auth`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};

const todoInstance = axios.create(axiosConfig);

todoInstance.interceptors.request.use(
  (config) => {
    const TOKEN = localStorage.getItem('token');
    if (TOKEN) {
      config.headers.Authorization = `Bearer ${TOKEN}`;
    }
    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  },
);

export const createTodo = async (todo) => {
  try {
    const res = await todoInstance.post('', todo);
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
