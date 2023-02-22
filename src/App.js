import { Routes, Route } from 'react-router-dom';
import Main from 'pages/Main';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import Todo from 'pages/Todo';
import React from 'react';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/todo' element={<Todo />} />
      </Routes>
    </>
  );
}

export default App;
