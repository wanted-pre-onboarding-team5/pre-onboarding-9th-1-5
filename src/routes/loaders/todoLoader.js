import { redirect } from 'react-router-dom';
import { USER_TOKEN_KEY } from 'constants';
import { getTodos } from 'apis/todo';

export const todoLoader = async () => {
  const userToken = localStorage.getItem(USER_TOKEN_KEY);
  if (!userToken) {
    return redirect('/signin');
  }
  return await getTodos();
};
