import { useLoaderData } from 'react-router-dom';
import { useInput } from 'hooks/useInput';
import { createTodo, getTodos, updateTodo, deleteTodo } from 'apis/todoApi';
import { useEffect, useState } from 'react';

export const useTodo = () => {
  const { data: loadedTodoData } = useLoaderData();
  const [todos, setTodos] = useState(loadedTodoData);
  const [isUpdated, setIsUpdated] = useState(false);
  const { value: todoValue, onReset: resetTodo, onChange: onTodoChange } = useInput();

  const refetchTodos = async () => {
    const refetchedTodos = await getTodos();
    setTodos(refetchedTodos);
    setIsUpdated(false);
  };

  useEffect(() => {
    refetchTodos();
  }, [isUpdated]);

  const handleCreateTodo = async (e) => {
    e.preventDefault();
    if (!todoValue) return;
    await createTodo({ todo: todoValue });
    setIsUpdated(true);
    resetTodo();
  };

  const handleCheckBoxChange = async (id, todo, isCompleted) => {
    await updateTodo(id, { todo, isCompleted: !isCompleted });
    setIsUpdated(true);
  };

  const handleDeleteClick = async (id) => {
    await deleteTodo(id);
    setIsUpdated(true);
  };

  return {
    todos,
    todoValue,
    isUpdated,
    setIsUpdated,
    onTodoChange,
    handleCreateTodo,
    handleCheckBoxChange,
    handleDeleteClick,
  };
};
