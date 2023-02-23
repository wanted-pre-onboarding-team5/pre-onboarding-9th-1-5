import { RouterProvider } from 'react-router';
import { router } from './router';

const App = () => {
  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
