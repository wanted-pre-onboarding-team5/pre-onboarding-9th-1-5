import React from 'react';
import { createTodo } from 'apis/todoApi';

const TodoForm = ({ todoList, setTodoList }) => {
  const [todoText, setTodoText] = React.useState('');

  const handleCreateTodo = async (event) => {
    event.preventDefault();
    const res = await createTodo(todoText);

    setTodoText('');
    setTodoList([res, ...todoList]);
  };

  return (
    <form onSubmit={handleCreateTodo}>
      <input
        data-testid='new-todo-input'
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button type='submit' data-testid='new-todo-add-button'>
        추가
      </button>
    </form>
  );
};

export default TodoForm;
