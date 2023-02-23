import { SignIn, SignUp, Todo, Error } from 'pages';
import { authLoader, todoLoader, rootLoader } from 'routes/loaders';
import { createBrowserRouter } from 'react-router-dom';

const routes = [
  {
    path: '/',
    loader: rootLoader,
  },
  {
    path: '/signin',
    element: <SignIn />,
    errorElement: <Error />,
    loader: authLoader,
  },
  {
    path: '/signup',
    element: <SignUp />,
    errorElement: <Error />,
    loader: authLoader,
  },
  {
    path: '/todo',
    element: <Todo />,
    errorElement: <Error />,
    loader: todoLoader,
  },
];

export const router = createBrowserRouter(routes);
