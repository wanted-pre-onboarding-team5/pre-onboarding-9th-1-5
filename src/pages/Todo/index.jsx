import { useLoaderData } from 'react-router-dom';
import { useInput } from 'hooks/useInput';
import { createTodo, getTodos, updateTodo } from 'apis/todoApi';
import { useEffect, useState } from 'react';
import { TodoListItem } from 'components/TodoListItem';

export const Todo = () => {
  const { data: loadedTodoData } = useLoaderData();
  const [todos, setTodos] = useState(loadedTodoData);
  const [isUpdated, setIsUpdated] = useState(false);
  const { value: todoValue, onReset: resetTodo, onChange: onTodoChange } = useInput();

  const refetchTodos = async () => {
    const refetchedTodos = await getTodos();
    setTodos(refetchedTodos);
    setIsUpdated(false);
  };

  useEffect(() => {
    refetchTodos();
  }, [isUpdated]);

  const handleCreateTodo = async (e) => {
    e.preventDefault();
    if (!todoValue) return;
    await createTodo({ todo: todoValue });
    setIsUpdated(true);
    resetTodo();
  };

  const handleCheckBoxChange = async (id, todo, isCompleted) => {
    await updateTodo(id, { todo, isCompleted: !isCompleted });
    setIsUpdated(true);
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
              isUpdated={isUpdated}
              setIsUpdated={setIsUpdated}
              onCheckBoxChange={() => handleCheckBoxChange(id, todo, isCompleted)}
            />
          );
        })}
      </ul>
    </>
  );
};
