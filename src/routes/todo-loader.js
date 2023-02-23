import axios from 'axios';
import { STORAGE } from 'constants';

export const todoLoader = () => {
  const token = localStorage.getItem(STORAGE.userToken);

  return axios.get('/', {
    baseURL: `${process.env.REACT_APP_API_URL}/todos`,
    timeout: 10000,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
};
