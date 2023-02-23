import { updateTodo } from 'apis/todoApi';
import { useInput } from 'hooks/useInput';
import { useEffect, useState } from 'react';

export const TodoListItem = ({
  id,
  todo,
  isCompleted,
  onCheckBoxChange,
  onDelete,
  setIsUpdated,
  isUpdated,
}) => {
  const { value: todoValue, onChange: onTodoChange } = useInput(todo);
  const [isEdit, setIsEdit] = useState(false);
  const [updatedTodoId, setUpdatedTodoId] = useState(null);

  const changeEditState = () => {
    setIsEdit((prev) => !prev);
  };

  const handleUpdateTodo = async () => {
    await updateTodo(id, { todo: todoValue, isCompleted });
    setIsUpdated(true);
    setUpdatedTodoId(id);
  };

  useEffect(() => {
    if (!isUpdated && updatedTodoId === id) {
      setIsEdit(false);
      setUpdatedTodoId(null);
    }
  }, [isUpdated]);

  return (
    <li>
      <label>
        <input type='checkbox' checked={isCompleted} onChange={onCheckBoxChange} />
        {isEdit ? (
          <>
            <input data-testid='modify-input' onChange={onTodoChange} value={todoValue} />
            <button data-testid='submit-button' onClick={handleUpdateTodo}>
              제출
            </button>
            <button data-testid='cancel-button' onClick={changeEditState}>
              취소
            </button>
          </>
        ) : (
          <>
            <span>{todo}</span>
            <button data-testid='modify-button' onClick={changeEditState}>
              수정
            </button>
            <button data-testid='delete-button' onClick={onDelete}>
              삭제
            </button>
          </>
        )}
      </label>
    </li>
  );
};
