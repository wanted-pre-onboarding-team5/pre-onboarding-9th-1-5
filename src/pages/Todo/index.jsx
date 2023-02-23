import { TodoForm } from 'components/TodoForm';
import { TodoList } from 'components/TodoList';
import { useTodos } from 'hooks/useTodos';
import { useLoaderData } from 'react-router-dom';

export const Todo = () => {
  const { data: initTodos } = useLoaderData();
  const { todos, setTodos, inputValue, handleChange, handleSubmit } = useTodos(initTodos);

  return (
    <>
      <TodoForm inputValue={inputValue} handleChange={handleChange} handleSubmit={handleSubmit} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
};
