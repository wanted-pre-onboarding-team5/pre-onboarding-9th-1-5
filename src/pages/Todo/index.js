import { TodoItem } from 'components/TodoItem';
import { useTodos } from '../../hooks/useTodos';

export const Todo = () => {
  const { todos, setTodos, inputValue, handleChange, handleSubmit } = useTodos();

  return (
    <>
      <div>Todo</div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          data-testid='new-todo-input'
          autoComplete='off'
          onChange={handleChange}
          value={inputValue}
        />
        <button type='submit' data-testid='new-todo-add-button'>
          추가
        </button>
        <ul>
          {todos
            ? todos.map((todo) => <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />)
            : '할 일을 추가하세요.'}
        </ul>
      </form>
    </>
  );
};
