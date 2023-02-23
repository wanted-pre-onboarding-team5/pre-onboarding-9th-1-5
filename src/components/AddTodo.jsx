import React from 'react';
import { useInput } from 'hooks/useInput';
import { postTodo } from 'apis/todoApi';

const AddTodoItem = ({ setIsUpdated }) => {
  const { value, onChange, onReset } = useInput();

  const onClickHandler = async (e) => {
    e.preventDefault();
    await postTodo(value);
    setIsUpdated(true);
    onReset();
  };
  return (
    <div>
      <input
        data-testid='new-todo-input'
        name='addTodo'
        onChange={onChange}
        type='text'
        value={value}
      />
      <button onClick={onClickHandler} data-testid='new-todo-add-button'>
        추가
      </button>
    </div>
  );
};

export default AddTodoItem;
