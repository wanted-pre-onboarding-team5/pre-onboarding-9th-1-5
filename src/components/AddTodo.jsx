import React from 'react';
import { useInput } from 'hooks/useInput';
import { postTodo } from 'apis/todoApi';

const AddTodoItem = ({ setIsUpdated }) => {
  const { value: addTodoValue, onChange: onChangeTodo, onReset } = useInput();

  const onClickHandler = async (e) => {
    e.preventDefault();
    await postTodo(addTodoValue);
    setIsUpdated(true);
    onReset();
  };
  return (
    <div>
      <input
        data-testid='new-todo-input'
        name='addTodo'
        onChange={onChangeTodo}
        type='text'
        value={addTodoValue}
      />
      <button onClick={onClickHandler} data-testid='new-todo-add-button'>
        추가
      </button>
    </div>
  );
};

export default AddTodoItem;
