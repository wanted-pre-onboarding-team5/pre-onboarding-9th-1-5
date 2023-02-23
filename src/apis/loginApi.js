import axios from 'axios';
import { API_END_POINT, USER_TOKEN_KEY, API_PATH } from 'constants';

const loginInstance = axios.create({
  baseURL: `${API_END_POINT + API_PATH.auth}`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const postSignUp = (userData) => {
  return loginInstance.post(API_PATH.join, userData);
};

export const postSignIn = (userData) => {
  return loginInstance.post(API_PATH.login, userData);
};

export const postSignOut = () => {
  localStorage.removeItem(USER_TOKEN_KEY);
};
