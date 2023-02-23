import axios from 'axios';
import { API_END_POINT } from 'constants';

const axiosConfig = {
  baseURL: `${API_END_POINT}/auth`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};

const authInstance = axios.create(axiosConfig);

export const postSignUp = async (userAccount) => {
  try {
    await authInstance.post('/signup', userAccount);
  } catch (err) {
    console.error(err);
  }
};

export const postSignIn = async (userAccount) => {
  try {
    const { data } = await authInstance.post('/signin', userAccount);
    return data;
  } catch (err) {
    console.error(err);
  }
};
