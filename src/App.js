import React from 'react';

// page
import Register from 'pages/Register';
import Signin from 'pages/Signin';

// module
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
