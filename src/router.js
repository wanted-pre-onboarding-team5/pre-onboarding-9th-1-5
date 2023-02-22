import { SignIn, SignUp, Todo, Error, signInLoader, todoLoader, Root, rootLoader } from 'pages';
import { createBrowserRouter } from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    loader: rootLoader,
  },
  {
    path: '/signin',
    element: <SignIn />,
    errorElement: <Error />,
    loader: signInLoader,
  },
  {
    path: '/signup',
    element: <SignUp />,
    errorElement: <Error />,
    loader: signInLoader,
  },
  {
    path: '/todo',
    element: <Todo />,
    errorElement: <Error />,
    loader: todoLoader,
  },
];

export const router = createBrowserRouter(routes);
