import { useState, useEffect, useCallback } from 'react';
import { getTodos, createTodo } from 'apis/todo';
import { useInput } from './useInput';

export const useTodos = (initTodos) => {
  const [todos, setTodos] = useState(initTodos);
  const { value, onChange, onReset } = useInput();

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await getTodos();
      setTodos(todos);
    };
    fetchTodos();
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!value) return;
      try {
        const newTodo = await createTodo(value);
        setTodos([newTodo, ...todos]);
        onReset();
      } catch (e) {
        console.error(e);
      }
    },
    [value, todos],
  );

  return {
    todos,
    setTodos,
    inputValue: value,
    handleChange: onChange,
    handleSubmit,
  };
};
