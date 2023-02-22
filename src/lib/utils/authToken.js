import { setHeader } from '../api/axios';

export const getAuthToken = () => {
  return localStorage.getItem('ACCESS_TOKEN');
};

export const setAuthToken = (token) => {
  localStorage.setItem('ACCESS_TOKEN', token);
  setHeader(token);
};

export const removeAuthToken = () => {
  localStorage.removeItem('ACCESS_TOKEN');
};
