import { redirect } from 'react-router-dom';

import { USER_TOKEN_KEY } from 'constants';

export const rootLoader = () => {
  const userToken = localStorage.getItem(USER_TOKEN_KEY);
  if (userToken) {
    return redirect('/todo');
  }
  return redirect('/signin');
};
