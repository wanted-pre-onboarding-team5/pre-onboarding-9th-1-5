import { useEffect, useState } from 'react';
import { todoInstance } from '../apis/todoApi';
import { USER_TOKEN_KEY } from 'constants';

export default function useTodo() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const response = async () => {
      try {
        todoInstance.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
          USER_TOKEN_KEY,
        )}`;
        await todoInstance.get('/todos').then(({ data }) => setTodoList([...data]));
      } catch (error) {
        alert(error);
      }
    };
    response();
  }, []);

  const postTodo = async (todo) => {
    try {
      todoInstance.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
        USER_TOKEN_KEY,
      )}`;
      todoInstance.defaults.headers.contentType = 'application/json';
      const { data } = await todoInstance.post('/todos', { todo });
      setTodoList([...todoList, data]);
    } catch (error) {
      alert(error);
    }
  };

  return { todoList, postTodo };
}
