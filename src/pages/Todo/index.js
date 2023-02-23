import { useState, useEffect } from 'react';
import TodoForm from 'components/TodoForm';
import { getTodos } from 'apis/todoApi';
import { useNavigate } from 'react-router-dom';
import TodoList from 'components/TodoList';

export const Todo = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const fetchTodos = await getTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
};

// import React from 'react';
// import { useState, useEffect } from 'react';
// // import { instance } from '../api/instance';
// // import TodoForm from '../components/TodoForm';
// // import TodoList from '../components/TodoList';
// import { instance } from 'api/instance';
// import TodoForm from 'components/TodoForm';
// import TodoList from 'components/TodoList';

// export const Todo = () => {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       instance.get('/todos').then((res) => {
//         setTodos(res.data);
//       });
//     }
//     // else window.location.replace('/signIn');
//   }, []);

//   return (
//     <div>
//       <TodoForm todos={todos} setTodos={setTodos} />
//       <TodoList todos={todos} setTodos={setTodos} />
//     </div>
//   );
// };
