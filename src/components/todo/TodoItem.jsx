import { Fragment, useState } from 'react';

const TodoItem = ({ contents, updateTodo, deleteTodo }) => {
  const { id, isCompleted, todo } = contents;
  const [modifyToggle, setModifyToggle] = useState(false);
  const [modifiedTodo, setModifiedTodo] = useState(todo);

  const handleUpdate = async (id, todo, isCompleted) => {
    if (!modifiedTodo) {
      alert('할 일을 입력해 주세요');
      return;
    }
    updateTodo(id, todo, isCompleted);
    setModifyToggle((props) => !props);
  };

  const handleDelete = async (id) => {
    deleteTodo(id);
  };

  const handleDone = async (id, todo, isCompleted) => {
    updateTodo(id, todo, isCompleted);
  };

  const handleCancel = () => {
    setModifiedTodo(todo);
    setModifyToggle((props) => !props);
  };

  return (
    <li>
      <label>
        <input
          type='checkbox'
          checked={isCompleted}
          onChange={() => handleDone(id, todo, !isCompleted)}
        />
        {modifyToggle ? (
          <Fragment>
            <input
              data-testid='modify-input'
              type='text'
              value={modifiedTodo}
              autoFocus
              onChange={(e) => setModifiedTodo(e.target.value)}
            />
            <button
              onClick={() => handleUpdate(id, modifiedTodo, isCompleted)}
              data-testid='submit-button'
            >
              제출
            </button>
            <button onClick={() => handleCancel()} data-testid='cancel-button'>
              취소
            </button>
          </Fragment>
        ) : (
          <Fragment>
            <span onClick={(e) => e.preventDefault()}>{todo}</span>
            <button
              onClick={() => {
                setModifyToggle((props) => !props);
              }}
              data-testid='modify-button'
            >
              수정
            </button>
            <button onClick={() => handleDelete(id)} data-testid='delete-button'>
              삭제
            </button>
          </Fragment>
        )}
      </label>
    </li>
  );
};

export default TodoItem;
