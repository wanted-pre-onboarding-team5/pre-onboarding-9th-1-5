import { deleteTodo, modifyTodo } from 'apis/todoApi';
import React, { useState } from 'react';

const TodoItem = ({ todo, setTodos, todos }) => {
  const [isModify, setIsModify] = useState(false);
  const [todoContent, setTodoContent] = useState(todo.todo);
  const [checked] = useState(!todo.isCompleted);

  const deleteHandler = (todoId) => {
    deleteTodo(todoId);
    setTodos(todos.filter((todoItem) => todoItem.id !== todo.id));
  };

  const modifyHandler = (todoId, content, isCompleted) => {
    modifyTodo(todoId, content, isCompleted);

    setTodos(todos.map((todo) => (todo.id === todoId ? { ...todo, todo: content } : todo)));
    setIsModify(!isModify);
  };

  const cancelHandler = () => {
    setTodoContent(todo.todo);
    setIsModify(!isModify);
  };

  const checkboxHandler = (todoId, todoContent, isCompleted) => {
    modifyTodo(todoId, todoContent, isCompleted);
    setTodos(
      todos.map((todo) =>
        todo.isCompleted !== checked && todo.id === todoId
          ? { ...todo, isCompleted: checked }
          : todo,
      ),
    );
  };

  return (
    <div style={{ display: 'flex' }}>
      <input
        type='checkbox'
        value={undefined || ''}
        defaultChecked={todo.isCompleted}
        onChange={() => {
          checkboxHandler(todo.id, todoContent, checked);
        }}
      />

      {isModify ? (
        <>
          <input
            value={todoContent}
            name='modifyContent'
            onChange={(e) => {
              setTodoContent(e.target.value);
            }}
            data-testid='modify-input'
          ></input>
          <button
            data-testid='modify-button'
            onClick={() => modifyHandler(todo.id, todoContent, todo.isCompleted)}
          >
            제출
          </button>
          <button data-testid='cancel-button' onClick={cancelHandler}>
            취소
          </button>
        </>
      ) : (
        <>
          <div>{todo.todo}</div>
          <button data-testid='modify-button' onClick={() => setIsModify(!isModify)}>
            수정
          </button>
          <button data-testid='delete-button' onClick={() => deleteHandler(todo.id)}>
            삭제
          </button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
