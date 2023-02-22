import { useInput } from 'hooks/useInput';
import { useState } from 'react';

export const TodoListItem = ({ todo, isCompleted, onCheckBoxChange, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);
  const { value: todoValue, onChange: onTodoChange } = useInput(todo);

  const changeEditState = () => {
    setIsEdit((prev) => !prev);
  };

  return (
    <li>
      <label>
        <input type='checkbox' checked={isCompleted} onChange={onCheckBoxChange} />
        {isEdit ? (
          <>
            <input data-testid='modify-input' onChange={onTodoChange} value={todoValue} />
            <button data-testid='submit-button'>제출</button>
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
