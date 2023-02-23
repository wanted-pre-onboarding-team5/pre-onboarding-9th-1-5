import { redirect } from 'react-router-dom';

export const rootLoader = () => {
  return redirect('/signin');
};
