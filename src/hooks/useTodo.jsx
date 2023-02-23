import { useEffect, useState } from 'react';
import { todoInstance } from '../apis/todoApi';

export default function useTodo() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const response = async () => {
      try {
        await todoInstance.get('/todos').then(({ data }) => setTodoList([...data]));
      } catch (error) {
        console.error(error);
      }
    };
    response();
  }, []);

  const postTodo = async (todo) => {
    try {
      const { data } = await todoInstance.post('/todos', { todo });
      setTodoList([...todoList, data]);
    } catch (error) {
      console.error(error);
    }
  };

  const updateTodo = async (id, todo, isCompleted) => {
    try {
      const { data } = await todoInstance.put(`/todos/${id}`, {
        todo,
        isCompleted,
      });
      setTodoList(
        todoList.map((todo) =>
          todo.id === data?.id ? { ...todo, todo: data.todo, isCompleted: data.isCompleted } : todo,
        ),
      );
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await todoInstance.delete(`/todos/${id}`);
      setTodoList(todoList.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return { todoList, postTodo, updateTodo, deleteTodo };
}
