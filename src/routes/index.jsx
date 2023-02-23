import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { SignIn, SignUp, Todo, Error } from 'pages';
import { todoLoader } from './todo-loader';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const router = createBrowserRouter([
  {
    element: <PrivateRoute />,
    children: [{ element: <Todo />, path: 'todo', errorElement: <Error />, loader: todoLoader }],
  },
  {
    element: <PublicRoute />,
    children: [{ element: <Navigate replace to='/todo' />, path: '/', errorElement: <Error /> }],
  },
  {
    element: <PublicRoute restricted />,
    children: [
      { element: <SignIn />, path: 'signin', errorElement: <Error /> },
      { element: <SignUp />, path: 'signup', errorElement: <Error /> },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
