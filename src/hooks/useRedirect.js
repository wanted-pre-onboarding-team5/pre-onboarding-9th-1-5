import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const useRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const accessToken = localStorage.getItem('access_token');

  useEffect(() => {
    if (accessToken === null && location.pathname === '/todo') return navigate('/');
    if (accessToken !== null && location.pathname !== '/todo') return navigate('/todo');
  });
};

export default useRedirect;
