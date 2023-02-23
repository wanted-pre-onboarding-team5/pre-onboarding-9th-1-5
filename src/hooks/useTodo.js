import { useState, useCallback } from 'react';
import { updateTodo, deleteTodo } from 'apis/todo';
import { useInput } from './useInput';

export const useTodo = (todo, setTodos) => {
  const [isEditMode, setIsEditmode] = useState(false);
  const { value, setValue, onChange } = useInput(todo.todo);

  const handleEditMode = useCallback(() => {
    setIsEditmode(!isEditMode);
    setValue(todo.todo);
  }, [isEditMode, todo.todo]);

  const handleChecked = useCallback(async () => {
    try {
      const updatedTodo = await updateTodo(todo.id, {
        ...todo,
        isCompleted: !todo.isCompleted,
      });
      setTodos((prevTodos) =>
        prevTodos.map((prevTodo) => (prevTodo.id === updatedTodo.id ? updatedTodo : prevTodo)),
      );
    } catch (e) {
      console.error(e);
    }
  }, [setTodos, todo]);

  const handleSubmit = useCallback(async () => {
    if (todo.todo === value) return setIsEditmode(false);

    try {
      const updatedTodo = await updateTodo(todo.id, {
        ...todo,
        todo: value,
      });
      setTodos((prevTodos) =>
        prevTodos.map((prevTodo) => (prevTodo.id === updatedTodo.id ? updatedTodo : prevTodo)),
      );
      setIsEditmode(false);
    } catch (e) {
      console.error(e);
    }
  }, [todo, value, setTodos]);

  const handleDelete = useCallback(async () => {
    try {
      await deleteTodo(todo.id);
      setTodos((prevTodos) => prevTodos.filter((prevTodo) => prevTodo.id !== todo.id));
    } catch (e) {
      console.error(e);
    }
  });

  return {
    isEditMode,
    inputValue: value,
    handleText: onChange,
    handleEditMode,
    handleChecked,
    handleSubmit,
    handleDelete,
  };
};
