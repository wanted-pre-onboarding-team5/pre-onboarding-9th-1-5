import { redirect } from 'react-router-dom';

import { STORAGE } from 'constants';

export const signInLoader = () => {
  const userToken = localStorage.getItem(STORAGE.userToken);
  if (userToken) {
    return redirect('/todo');
  }
  return null;
};
