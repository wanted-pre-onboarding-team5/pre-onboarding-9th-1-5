import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
  const token = localStorage.getItem('AUTH_TOKEN');

  return token ? <Outlet /> : <Navigate replace to='/signin' />;
}

export default PrivateRoute;
