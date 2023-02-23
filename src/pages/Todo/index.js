import { TodoForm } from 'components/TodoForm';
import { TodoList } from 'components/TodoList';
import { useTodos } from 'hooks/useTodos';

export const Todo = () => {
  const { todos, setTodos, inputValue, handleChange, handleSubmit } = useTodos();

  return (
    <>
      <TodoForm inputValue={inputValue} handleChange={handleChange} handleSubmit={handleSubmit} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
};
