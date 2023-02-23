import React from 'react';
import { useInput } from 'hooks/useInput';
import { createTodo } from 'apis/todoApi';

const TodoForm = ({ todoList, setTodoList }) => {
  const { value: todoText, onChange: changeTodoText, onReset: resetTodoText } = useInput('');

  const handleCreateTodo = async (event) => {
    event.preventDefault();
    const newTodo = await createTodo(todoText);

    resetTodoText('');
    setTodoList([newTodo, ...todoList]);
  };

  return (
    <form onSubmit={handleCreateTodo}>
      <input data-testid='new-todo-input' value={todoText} onChange={changeTodoText} />
      <button type='submit' data-testid='new-todo-add-button' disabled={todoText === ''}>
        추가
      </button>
    </form>
  );
};

export default TodoForm;
