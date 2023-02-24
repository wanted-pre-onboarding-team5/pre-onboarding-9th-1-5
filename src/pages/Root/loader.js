import { redirect } from 'react-router-dom';

import { USER_TOKEN_KEY } from 'constants';
import { PATH } from 'constants';

export const rootLoader = () => {
  const userToken = localStorage.getItem(USER_TOKEN_KEY);
  if (userToken) {
    return redirect(PATH.todo);
  }
  return redirect(PATH.signIn);
};
