import React from 'react';
import { useState } from 'react';
import { instance } from '../api/instance';

const TodoList = ({ todos, setTodos }) => {
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState('');

  const deleteTodo = (id) => {
    instance
      .delete(`/todos/${id}`)
      .then(() => {
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
      })
      .catch((err) => {
        return alert(err);
      });
  };

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
      .catch((err) => {
        return alert(err);
      });
  };

  const submitEdits = (id, isCompleted) => {
    instance
      .put(`/todos/${id}`, {
        todo: editingText,
        isCompleted: isCompleted,
      })
      .then((res) => {
        const updatedTodos = todos.map((todo) => {
          if (todo.id === id) {
            todo.todo = res.data.todo;
          }
          return todo;
        });
        setTodos(updatedTodos);
        setTodoEditing(null);
        setEditingText('');
      })
      .catch((err) => {
        return alert(err);
      });
  };

  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id} className='todo'>
          <div className='todo-item'>
            <div className='todo-text'>
              <input
                type='checkbox'
                className='checkbox'
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
            <div className='todo-actions'>
              {todo.id === todoEditing ? (
                <button
                  data-testid='submit-button'
                  className='btns'
                  onClick={() => {
                    submitEdits(todo.id, todo.isCompleted);
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

              <div className='todo-actions-margin' />
              {todo.id === todoEditing ? (
                <button
                  data-testid='cancel-button'
                  className='btns'
                  onClick={() => {
                    setEditingText('');
                    setTodoEditing(null);
                  }}
                >
                  취소
                </button>
              ) : (
                <button
                  data-testid='delete-button'
                  className='btns'
                  onClick={() => deleteTodo(todo.id)}
                >
                  삭제
                </button>
              )}
            </div>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
