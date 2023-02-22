import { Routes, Route } from 'react-router-dom';
import { SignInPage, SignUpPage } from 'pages';
import { Main } from 'layouts';

import React from 'react';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />}>
        <Route path='signin' element={<SignInPage />} />
        <Route path='signup' element={<SignUpPage />} />
      </Route>
    </Routes>
  );
}

export default App;
