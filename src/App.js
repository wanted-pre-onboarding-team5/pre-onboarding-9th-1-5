import React, { Suspense, lazy, Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const Home = lazy(() => import('./pages/Home'));
  const Signin = lazy(() => import('./pages/Signin'));
  const Signup = lazy(() => import('./pages/Signup'));
  const Todo = lazy(() => import('./pages/Todo'));

  return (
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/todo' element={<Todo />} />
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
