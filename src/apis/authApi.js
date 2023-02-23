import axios from 'axios';

import { STORAGE } from 'constants';

const axiosConfig = {
  baseURL: `${process.env.REACT_APP_API_URL}/auth`,
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
    const { access_token: accessToken } = response.data;
    if (response.status === 200) {
      localStorage.setItem(STORAGE.userToken, accessToken);
    }
  } catch (err) {
    console.error(err);
  }
};
