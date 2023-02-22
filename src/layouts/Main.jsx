import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export const Main = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') navigate('/signin');
  }, [location.pathname, navigate]);

  return (
    <main>
      <div>
        <h1>TODOS</h1>
        <Outlet />
      </div>
    </main>
  );
};
