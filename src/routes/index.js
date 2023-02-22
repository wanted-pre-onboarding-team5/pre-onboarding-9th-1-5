import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Todo from 'pages/Todo';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const router = createBrowserRouter([
  {
    element: <PrivateRoute />,
    children: [{ element: <Todo />, path: 'todo' }],
  },
  {
    element: <PublicRoute />,
    children: [{ element: <Navigate replace to='/todo' />, path: '/' }],
  },
  {
    element: <PublicRoute restricted />,
    children: [
      { element: <SignIn />, path: 'signin' },
      { element: <SignUp />, path: 'signup' },
    ],
  },
]);

function PageRouter() {
  return <RouterProvider router={router} />;
}

export default PageRouter;
