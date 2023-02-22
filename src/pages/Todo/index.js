import { useState, useEffect } from 'react';
import TodoForm from 'components/TodoForm';
import { getTodos } from 'apis/todoApi';
import { useNavigate } from 'react-router-dom';

export const Todo = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const getTodos = await getTodos();
    setTodos(getTodos);
  };

  useEffect(() => {
    getTodos();
    // const token = localStorage.getItem('token');
    // if (token) {
    //   getTodos();
    // } else window.location.replace('/signin');
  }, []);

  return (
    <>
      <div>Todo</div>
      <div></div>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
};
