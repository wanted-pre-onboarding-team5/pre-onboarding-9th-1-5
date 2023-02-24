import { updateTodo } from 'apis/todoApi';
import { useInput } from 'hooks/useInput';
import { useCallback, useEffect, useState } from 'react';

export const useTodoItem = (id, setIsUpdated, isUpdated, todo, isCompleted) => {
  const { value: todoValue, onChange: onTodoChange } = useInput(todo);
  const [isEdit, setIsEdit] = useState(false);
  const [updatedTodoId, setUpdatedTodoId] = useState(null);

  const changeEditState = useCallback(() => {
    setIsEdit((prev) => !prev);
  });

  const handleUpdateTodo = useCallback(async () => {
    await updateTodo(id, { todo: todoValue, isCompleted });
    setIsUpdated(true);
    setUpdatedTodoId(id);
  }, [id, isCompleted]);

  useEffect(() => {
    if (!isUpdated && updatedTodoId === id) {
      setIsEdit(false);
      setUpdatedTodoId(null);
    }
  }, [isUpdated]);

  return {
    isEdit,
    onTodoChange,
    todoValue,
    handleUpdateTodo,
    changeEditState,
  };
};
