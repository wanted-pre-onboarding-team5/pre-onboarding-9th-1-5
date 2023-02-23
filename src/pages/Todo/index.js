import { getTodos } from 'apis/todoApi';
import AddTodoItem from 'components/AddTodo';
import TodoItem from 'components/TodoItem';
import React, { useEffect, useState } from 'react';

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  const getTodoLists = async () => {
    const todoLists = await getTodos();
    setTodos(todoLists);
    setIsUpdated(false);
  };

  useEffect(() => {
    getTodoLists();
  }, [isUpdated]);

  return (
    <>
      <div>Todo</div>
      <AddTodoItem
        setTodos={setTodos}
        todos={todos}
        isUpdated={isUpdated}
        setIsUpdated={setIsUpdated}
      />
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <TodoItem todo={todo} setTodos={setTodos} todos={todos} />
          </div>
        );
      })}
    </>
  );
};
