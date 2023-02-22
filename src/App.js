import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Signin } from 'Pages/Signup/Signup';
import { Signup } from 'Pages/Signup/Signup';
import { Navbar } from 'Pages/Components/Navbar';

const accessToken = localStorage.getItem('JWT');

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className='main'>
          <Routes>
            <Route path='/' element={<Navigate replace to='/todo' />} />
            {accessToken ? (
              <>
                <Route path='/signin' element={<Navigate replace to='/todo' />} />
                <Route path='/signup' element={<Navigate replace to='/todo' />} />
              </>
            ) : (
              <>
                <Route path='/signin' element={<Signin />} />
                <Route path='/signup' element={<Signup />} />
              </>
            )}
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
