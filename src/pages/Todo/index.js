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
    // setTodos(getTodos2);
  };

  useEffect(() => {
    fetchTodos();
    // const token = localStorage.getItem('token');
    // if (token) {
    //   getTodos();
    // } else window.location.replace('/signin');
  }, []);

  return (
    <>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
};
