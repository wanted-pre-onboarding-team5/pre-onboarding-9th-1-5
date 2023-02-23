import { useState, useEffect } from 'react';
import TodoForm from 'components/TodoForm';
import { getTodos } from 'apis/todoApi';
import TodoList from 'components/TodoList';

export const Todo = () => {
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
