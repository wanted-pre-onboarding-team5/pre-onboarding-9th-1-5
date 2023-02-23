import React from 'react';
import { useState } from 'react';
import { deleteTodo, updateTodo } from 'apis/todoApi';

const TodoList = ({ todos, setTodos, setIsUpdated }) => {
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState('');

  const toggleComplete = async (id, todo, isCompleted) => {
    const toggledComplete = await updateTodo(id, { todo: todo, isCompleted: !isCompleted });
    console.info(toggledComplete);
    const toggledCompletes = todos.map((todo) => {
      todo.isCompleted = toggledComplete.isCompleted;
      return todo;
    });
    setTodos(toggledCompletes);
    setIsUpdated(true);
  };

  const editTodo = async (id, isCompleted) => {
    const updatedTodo = await updateTodo(id, { todo: editingText, isCompleted: isCompleted });
    console.info(updatedTodo);
    const updatedTodos = todos.map((todo) => {
      todo.todo = updatedTodo.todo;
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
    setIsUpdated(true);
    setEditingText('');
  };

  const handleDeleteTodo = async (id) => {
    const deletedTodo = await deleteTodo(id);
    console.info(deletedTodo);
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
    setIsUpdated(true);
  };

  return todos.map((todo) => (
    <li key={todo.id}>
      <div>
        <input
          type='checkbox'
          id='completed'
          checked={todo.isCompleted}
          onChange={() => toggleComplete(todo.id, todo.todo, todo.isCompleted)}
        />
        {todo.id === todoEditing ? (
          <input
            data-testid='modify-input'
            type='text'
            onChange={(e) => setEditingText(e.target.value)}
            defaultValue={todo.todo}
          />
        ) : (
          <span>{todo.todo}</span>
        )}
      </div>
      <div>
        {todo.id === todoEditing ? (
          <button
            data-testid='submit-button'
            className='btns'
            onClick={() => {
              editTodo(todo.id, todo.isCompleted);
            }}
          >
            체크
          </button>
        ) : (
          <button
            data-testid='modify-button'
            className='btns'
            onClick={() => setTodoEditing(todo.id)}
          >
            수정
          </button>
        )}
        {todo.id === todoEditing ? (
          <button
            data-testid='cancel-button'
            onClick={() => {
              setEditingText('');
              setTodoEditing(null);
            }}
          >
            취소
          </button>
        ) : (
          <button data-testid='delete-button' onClick={() => handleDeleteTodo(todo.id)}>
            삭제
          </button>
        )}
      </div>
    </li>
  ));
};

export default TodoList;
