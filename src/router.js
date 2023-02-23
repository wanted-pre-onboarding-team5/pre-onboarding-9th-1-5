import { SignIn, SignUp, Todo, Error, signInLoader, todoLoader } from 'pages';
import { createBrowserRouter } from 'react-router-dom';
import { PATH } from 'constants';

const routes = [
  {
    path: PATH.home,
    element: <SignIn />,
    errorElement: <Error />,
    loader: signInLoader,
  },
  {
    path: PATH.login,
    element: <SignIn />,
    errorElement: <Error />,
    loader: signInLoader,
  },
  {
    path: PATH.join,
    element: <SignUp />,
    errorElement: <Error />,
    loader: signInLoader,
  },
  {
    path: PATH.todo,
    element: <Todo />,
    errorElement: <Error />,
    loader: todoLoader,
  },
];

export const router = createBrowserRouter(routes);
