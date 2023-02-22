import { getTodos } from 'apis/todoApi';
import AddTodoItem from 'components/AddTodo';
import TodoItem from 'components/TodoItem';
import React, { useEffect, useState } from 'react';

export const Todo = () => {
  const [todos, setTodos] = useState([]);

  const todoLists = async () => {
    const todoLists = await getTodos();
    setTodos(todoLists);
  };

  useEffect(() => {
    todoLists();
  }, []);

  return (
    <>
      <div>Todo</div>
      <AddTodoItem setTodos={setTodos} todos={todos} />
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <TodoItem todo={todo} />
          </div>
        );
      })}
    </>
  );
};
