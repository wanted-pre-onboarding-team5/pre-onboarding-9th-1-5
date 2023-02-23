import { MemoizedTodoItem } from 'components/TodoItem';

export const TodoList = ({ todos, setTodos }) => {
  return (
    <ul>
      {todos
        ? todos.map((todo) => <MemoizedTodoItem key={todo.id} todo={todo} setTodos={setTodos} />)
        : '할 일을 추가하세요.'}
    </ul>
  );
};
