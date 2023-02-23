import React from 'react';
import { useState, useEffect } from 'react';
// import { instance } from '../api/instance';
// import TodoForm from '../components/TodoForm';
// import TodoList from '../components/TodoList';
import { instance } from 'api/instance';
import TodoForm from 'components/TodoForm';
import TodoList from 'components/TodoList';

const Todo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      instance.get('/todos').then((res) => {
        setTodos(res.data);
      });
    } else window.location.replace('/signin');
  }, []);

  return (
    <div>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Todo;
