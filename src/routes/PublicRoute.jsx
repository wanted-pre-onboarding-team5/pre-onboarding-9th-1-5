import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { STORAGE } from 'constants';

function PublicRoute({ restricted }) {
  const token = localStorage.getItem(STORAGE.userToken);

  return token && restricted ? <Navigate replace to='/todo' /> : <Outlet />;
}

export default PublicRoute;
