import { redirect } from 'react-router-dom';

import { USER_TOKEN_KEY } from 'constants';
import { todoInstance } from 'apis/todoApi';
import { PATH } from 'constants';

export const todoLoader = () => {
  const userToken = localStorage.getItem(USER_TOKEN_KEY);
  if (!userToken) {
    return redirect(PATH.signIn);
  }
  return todoInstance.get('');
};
