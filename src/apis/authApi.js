import axios from 'axios';
import { API_PATH } from 'constants';

import { USER_TOKEN_KEY } from 'constants';

const axiosConfig = {
  baseURL: `${process.env.REACT_APP_API_URL}${API_PATH.auth}`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};

const loginInstance = axios.create(axiosConfig);

export const postSignUp = async (userAccount) => {
  try {
    await loginInstance.post(API_PATH.signUp, userAccount);
  } catch (err) {
    console.error(err);
  }
};

export const postSignIn = async (userAccount) => {
  try {
    const response = await loginInstance.post(API_PATH.signIn, userAccount);
    const { access_token: accessToken } = response.data;
    if (response.status === 200) {
      localStorage.setItem(USER_TOKEN_KEY, accessToken);
    }
    return { accessToken };
  } catch (err) {
    console.error(err);
  }
};
