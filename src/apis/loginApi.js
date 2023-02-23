import axios from 'axios';

import { API_END_POINT, USER_TOKEN_KEY } from 'constants';

const axiosConfig = {
  baseURL: `${API_END_POINT}/auth`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};

const loginInstance = axios.create(axiosConfig);

export const postSignUp = async (userAccount) => {
  try {
    await loginInstance.post('/signup', userAccount);
  } catch (err) {
    console.error(err);
  }
};

export const postSignIn = async (userAccount) => {
  try {
    const response = await loginInstance.post('/signin', userAccount);
    const accessToken = response.data.access_token;
    if (response.status === 200) {
      localStorage.setItem(USER_TOKEN_KEY, accessToken);
    }
  } catch (err) {
    console.error(err);
  }
};

export const postSignOut = () => {
  localStorage.removeItem(USER_TOKEN_KEY);
};
