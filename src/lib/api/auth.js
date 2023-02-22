import axios from './axios';

export const signIn = async ({ email, password }) => {
  const { data } = await axios.post('/auth/signin', {
    email,
    password,
  });
  return data;
};

export const signUp = async ({ email, password }) =>
  await axios.post('/auth/signup', {
    email,
    password,
  });
