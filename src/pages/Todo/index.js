import { useState, useEffect } from 'react';
import TodoForm from 'components/TodoForm';
import { getTodos } from 'apis/todoApi';
import TodoList from 'components/TodoList';

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  const fetchTodos = async () => {
    const fetchTodos = await getTodos();
    setIsUpdated(false);
  };

  useEffect(() => {
    fetchTodos();
  }, [isUpdated]);

  return (
    <>
      <TodoForm todos={todos} setTodos={setTodos} setIsUpdated={setIsUpdated} />
      <TodoList todos={todos} setTodos={setTodos} setIsUpdated={setIsUpdated} />
    </>
  );
};
