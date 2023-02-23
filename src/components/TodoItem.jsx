import { useTodo } from '../hooks/useTodo';

export const TodoItem = ({ todo, setTodos }) => {
  const {
    isEditMode,
    inputValue,
    handleText,
    handleChecked,
    handleEditMode,
    handleSubmit,
    handleDelete,
  } = useTodo(todo, setTodos);

  return (
    <li>
      {!isEditMode ? (
        <>
          <label>
            <input
              type='checkbox'
              className='sr-only'
              checked={todo.isCompleted}
              onChange={handleChecked}
            />
            <span>{todo.todo}</span>
          </label>
          <button data-testid='modify-button' onClick={handleEditMode}>
            수정
          </button>
          <button data-testid='delete-button' onClick={handleDelete}>
            삭제
          </button>
        </>
      ) : (
        <>
          <input
            type='text'
            data-testid='modify-input'
            autoComplete='off'
            value={inputValue}
            onChange={handleText}
          />
          <button data-testid='submit-button' onClick={handleSubmit}>
            완료
          </button>
          <button data-testid='cancel-button' onClick={handleEditMode}>
            취소
          </button>
        </>
      )}
    </li>
  );
};
