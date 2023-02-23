import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { STORAGE } from 'constants';

function PrivateRoute() {
  const token = localStorage.getItem(STORAGE.userToken);

  return token ? <Outlet /> : <Navigate replace to='/signin' />;
}

export default PrivateRoute;
