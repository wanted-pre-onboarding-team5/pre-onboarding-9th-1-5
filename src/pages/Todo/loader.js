import axios from 'axios';
import { redirect } from 'react-router-dom';

import { STORAGE } from 'constants';

export const todoLoader = () => {
  const userToken = localStorage.getItem(STORAGE.userToken);
  if (!userToken) {
    return redirect('/signin');
  }
  return axios.get('', {
    baseURL: `${process.env.REACT_APP_API_URL}/todos`,
    timeout: 10000,
    headers: {
      Authorization: `Bearer ${userToken}`,
      'Content-Type': 'application/json',
    },
  });
};
