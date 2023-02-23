import React from 'react';
import { updateTodo, deleteTodo } from 'apis/todoApi';
import { useInput } from 'hooks/useInput';

const TodoItem = ({ todo, todoList, setTodoList }) => {
  const [todoData, setTodoData] = React.useState(todo);
  const [isEditMode, setIsEditMode] = React.useState(false);
  const {
    value: newTodoText,
    onChange: changeNewTodoText,
    onReset: resetNewTodoText,
  } = useInput(todo.todo);

  const toggleCheckBox = async () => {
    const newTodoData = await updateTodo({
      ...todoData,
      isCompleted: !todoData.isCompleted,
    });
    setTodoData(newTodoData);
  };

  const submitEditText = async () => {
    if (todoData.todo !== newTodoText) {
      const newTodoData = await updateTodo({ ...todoData, todo: newTodoText });
      setTodoData(newTodoData);
    }

    setIsEditMode(false);
  };

  const cancelEditText = () => {
    resetNewTodoText();
    setIsEditMode(false);
  };

  const handleDeleteTodo = async () => {
    if (window.confirm('삭제하시겠습니까?')) {
      await deleteTodo(todoData.id);
      setTodoList(todoList.filter((todo) => todo.id !== todoData.id));
    }
  };

  return (
    <li>
      <label htmlFor='todo'>
        <input
          name='todo'
          type='checkbox'
          defaultChecked={todo.isCompleted}
          onClick={toggleCheckBox}
        />
        {isEditMode ? (
          <input
            data-testid='modify-input'
            autoFocus
            value={newTodoText}
            onChange={changeNewTodoText}
          />
        ) : (
          <span>{todoData.todo}</span>
        )}
      </label>
      {isEditMode ? (
        <div>
          <button data-testid='cancel-button' onClick={cancelEditText}>
            취소
          </button>
          <button
            data-testid='submit-button'
            onClick={submitEditText}
            disabled={newTodoText === ''}
          >
            완료
          </button>
        </div>
      ) : (
        <div>
          <button data-testid='modify-button' onClick={() => setIsEditMode(true)}>
            수정
          </button>
          <button data-testid='delete-button' onClick={handleDeleteTodo}>
            삭제
          </button>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
