import { useNavigate } from 'react-router-dom';
import TodoList from '../../components/todo/TodoList';
import TodoForm from '../../components/todo/TodoForm';
import useTodo from '../../hooks/useTodo';
import { USER_TOKEN_KEY } from 'constants';

export const Todo = () => {
  const navigate = useNavigate();
  const { todoList, postTodo, updateTodo, deleteTodo } = useTodo();

  const logout = () => {
    localStorage.removeItem(USER_TOKEN_KEY);
    navigate('/signin');
  };

  return (
    <div>
      <div>
        <div>TodoList</div>
        <div onClick={logout}>logout</div>
      </div>
      <TodoForm postTodo={postTodo} />
      <TodoList todoList={todoList} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
};
