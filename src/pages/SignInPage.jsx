import { SignInForm } from 'containers';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuthToken } from 'lib/utils/authToken';

export const SignInPage = () => {
  const navigate = useNavigate();
  const token = getAuthToken();

  useEffect(() => {
    if (token) navigate('/todo');
  });

  return <>{!token && <SignInForm />}</>;
};
