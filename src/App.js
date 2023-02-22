import React, { lazy } from 'react';
import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Login = lazy(() => import('pages/Login'));
const Join = lazy(() => import('pages/Join'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<Join />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
