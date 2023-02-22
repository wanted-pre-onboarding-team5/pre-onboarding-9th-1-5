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
