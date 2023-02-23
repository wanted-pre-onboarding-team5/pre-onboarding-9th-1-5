import React from 'react';
import { createTodo } from 'apis/todoApi';

export const TodoForm = ({ todoList, setTodoList }) => {
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

export const TodoItem = ({ todo }) => {
  console.info(todo);
  return (
    <li>
      <label htmlFor='todo'>
        <input name='todo' type='checkbox' defaultChecked={todo.isCompleted} />
        <span>{todo.todo}</span>
      </label>
      <div>
        <button data-testid='modify-button'>수정</button>
        <button data-testid='delete-button'>삭제</button>
      </div>
    </li>
  );
};
