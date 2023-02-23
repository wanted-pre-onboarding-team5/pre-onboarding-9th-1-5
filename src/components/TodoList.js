import React from 'react';
import { useState } from 'react';
import { deleteTodo, updateTodo } from 'apis/todoApi';

const TodoList = ({ todos, setTodos }) => {
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState('');

  const toggleComplete = (id, todo, isCompleted) => {
    instance
      .put(`/todos/${id}`, {
        todo: todo,
        isCompleted: !isCompleted,
      })
      .then((res) => {
        const updatedTodos = todos.map((todo) => {
          if (todo.id === id) {
            todo.isCompleted = res.data.isCompleted;
          }
          return todo;
        });
        setTodos(updatedTodos);
      })
      .catch((err) => console.log(err));
  };

  const editTodo = async (id, isCompleted) => {
    const updatedTodo = await updateTodo(id, { todo: editingText, isCompleted });
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
            // value={todo?.todo}
          />
        ) : (
          // <TodoText isChecked={todo.isCompleted}>{todo.todo}</TodoText>
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
      </div>
      {/* deleteTest
      <button data-testid='delete-button' onClick={() => deleteTodo(todo.id)}>
        삭제
      </button>
      <button
        data-testid='submit-button'
        className='btns'
        onClick={() => {
          // editTodo(todo.id, todo.isCompleted);
          updateTodo(todo.id, todo.isCompleted);
        }}
      >
        수정
      </button> */}

      <div className='todo-actions-margin' />
      {todo.id === todoEditing ? (
        <button
          data-testid='cancel-button'
          cc
          className='btns'
          onClick={() => {
            setEditingText('');
            setTodoEditing(null);
          }}
        >
          취소
        </button>
      ) : (
        <button data-testid='delete-button' className='btns' onClick={() => deleteTodo(todo.id)}>
          삭제
        </button>
      )}
      {/* <button
        data-testid='submit-button'
        className='btns'
        onClick={() => {
          // editTodo(todo.id, todo.isCompleted);
          updateTodo(todo.id, todo.isCompleted);
        }}
      >
        수정
      </button> */}
    </li>
  ));
};

export default TodoList;
