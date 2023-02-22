import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PublicRoute({ restricted }) {
  const token = localStorage.getItem('AUTH_TOKEN');

  return token && restricted ? <Navigate replace to='/todo' /> : <Outlet />;
}

export default PublicRoute;
