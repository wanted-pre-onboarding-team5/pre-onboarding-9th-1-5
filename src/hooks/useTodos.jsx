import { useState, useEffect, useCallback } from 'react';
import { getTodos, createTodo } from 'apis/todoApi';
import { useInput } from './useInput';

export const useTodos = () => {
  const [todos, setTodos] = useState(null);
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
