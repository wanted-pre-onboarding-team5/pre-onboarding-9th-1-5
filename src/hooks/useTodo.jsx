import { useEffect, useState } from 'react';
import { todoInstance } from '../apis';

export default function useTodo() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const response = async () =>
      await todoInstance.get('/todos').then(({ data }) => setTodoList([...data]));
    response();
  }, []);

  const postTodo = async (todo) => {
    const { data } = await todoInstance.post('/todos', { todo });
    setTodoList([...todoList, data]);
  };

  return { todoList, postTodo };
}
