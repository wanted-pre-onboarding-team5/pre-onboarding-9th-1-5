import { PATH } from 'constants';
import { SignIn, SignUp, Todo, Error, signInLoader, todoLoader, Root, rootLoader } from 'pages';
import { createBrowserRouter } from 'react-router-dom';

const routes = [
  {
    path: PATH.root,
    element: <Root />,
    errorElement: <Error />,
    loader: rootLoader,
  },
  {
    path: PATH.signIn,
    element: <SignIn />,
    errorElement: <Error />,
    loader: signInLoader,
  },
  {
    path: PATH.signUp,
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
