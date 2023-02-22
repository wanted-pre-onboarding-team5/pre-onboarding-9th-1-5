import { userClient } from 'apis/userClient';

export const signInApi = ({ email, password }) => {
  return userClient.post('/auth/signin', { email, password });
};

export const signUpApi = ({ email, password }) => {
  return userClient.post('/auth/signup', { email, password });
};
