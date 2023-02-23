import axios from 'axios';
import { redirect } from 'react-router-dom';

import { USER_TOKEN_KEY } from 'constants';
import { API_END_POINT } from 'constants';

export const todoLoader = () => {
  const userToken = localStorage.getItem(USER_TOKEN_KEY);
  if (!userToken) {
    return redirect('/signin');
  }
  return axios.get('', {
    baseURL: `${API_END_POINT}/todos`,
    timeout: 10000,
    headers: {
      Authorization: `Bearer ${userToken}`,
      'Content-Type': 'application/json',
    },
  });
};
