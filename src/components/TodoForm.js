import React from 'react';
import { useState } from 'react';
import { createTodo } from 'apis/todoApi';

const TodoForm = ({ todos, setTodos, setIsUpdated }) => {
  const [todo, setTodo] = useState('');

  const handleSubmit = async (e) => {
    if (todo) {
      e.preventDefault();
      const newTodo = await createTodo(todo);
      setTodos([newTodo, ...todos]);
      setIsUpdated(true);
      setTodo('');
    } else {
      alert('할 일을 입력해주세요.');
    }
  };

  return (
    <div>
      <h1>Todolist</h1>
      <form onSubmit={handleSubmit}>
        <input
          data-testid='new-todo-input'
          type='text'
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button data-testid='new-todo-add-button' className='addBtn'>
          추가
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
