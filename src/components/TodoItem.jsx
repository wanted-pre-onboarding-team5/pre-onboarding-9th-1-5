import { deleteTodo, modifyTodo } from 'apis/todoApi';
import React from 'react';

const TodoItem = ({ todo, setTodos, todos }) => {
  const [modify, setModify] = React.useState(false);
  const [todoContent, setTodoContent] = React.useState(todo.todo);
  const [checked, setChecked] = React.useState(!todo.isCompleted);

  const deleteHandler = (todoId) => {
    deleteTodo(todoId);
    setTodos(todos.filter((todoItem) => todoItem.id !== todo.id));
  };

  const modifyHandler = (todoId, content, isCompleted) => {
    modifyTodo(todoId, content, isCompleted);

    setTodos(todos.map((todo) => (todo.id === todoId ? { ...todo, todo: content } : todo)));
    setModify(!modify);
  };

  const cancelHandler = () => {
    setTodoContent(todo.todo);
    setModify(!modify);
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
      {todo.isCompleted ? (
        <input
          type='checkbox'
          value={undefined || ''}
          onChange={() => {
            setChecked(!checked);
            checkboxHandler(todo.id, todoContent, checked);
          }}
          checked
        />
      ) : (
        <input
          type='checkbox'
          value={undefined || ''}
          onChange={() => {
            setChecked(!checked);
            checkboxHandler(todo.id, todoContent, checked);
          }}
        />
      )}
      {modify ? (
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
          <button data-testid='modify-button' onClick={() => setModify(!modify)}>
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
