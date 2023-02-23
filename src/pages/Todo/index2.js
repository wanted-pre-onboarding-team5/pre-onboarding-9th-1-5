import { useLoaderData } from 'react-router-dom';
import { useInput } from 'hooks/useInput';
import { createTodo, deleteTodo, updateTodo } from 'apis/todoApi';
import { useEffect } from 'react';
import { TodoListItem } from 'components/TodoListItem';
import { useTodoDispatch, useTodoState } from 'context/TodoProvider';

export const Todo = () => {
  const { todos } = useTodoState();
  const todoDispacth = useTodoDispatch();
  const { data: loadedTodoData } = useLoaderData();
  const { value: todoValue, onReset: resetTodo, onChange: onTodoChange } = useInput();

  useEffect(() => {
    todoDispacth({
      type: 'init',
      payload: {
        todos: loadedTodoData,
      },
    });
  }, []);

  const handleCreateTodo = async (e) => {
    e.preventDefault();
    if (!todoValue) return;
    const newTodo = await createTodo({ todo: todoValue });
    todoDispacth({
      type: 'create',
      payload: {
        newTodo,
      },
    });
    resetTodo();
  };

  const handleCheckBoxChange = async (id, todo, isCompleted) => {
    const updatedTodo = await updateTodo(id, { todo, isCompleted: !isCompleted });
    todoDispacth({
      type: 'update',
      payload: {
        id,
        updatedTodo,
      },
    });
  };

  const handleDeleteClick = async (id) => {
    await deleteTodo(id);
    todoDispacth({
      type: 'delete',
      payload: {
        id,
      },
    });
  };

  return (
    <>
      <h1>✅ Todo List</h1>
      <form onSubmit={handleCreateTodo}>
        <h3>➕ 새로운 할 일 추가하기</h3>
        <input data-testid='new-todo-input' value={todoValue} onChange={onTodoChange} />
        <button type='submit' data-testid='new-todo-add-button'>
          추가
        </button>
      </form>
      <h3>📄 나의 할 일 목록</h3>
      <ul>
        {todos.map(({ id, todo, isCompleted }) => {
          return (
            <TodoListItem
              key={id}
              id={id}
              todo={todo}
              isCompleted={isCompleted}
              onCheckBoxChange={() => handleCheckBoxChange(id, todo, isCompleted)}
              onDelete={() => handleDeleteClick(id)}
            />
          );
        })}
      </ul>
    </>
  );
};
