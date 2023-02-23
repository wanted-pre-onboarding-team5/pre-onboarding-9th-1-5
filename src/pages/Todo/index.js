import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { TodoForm, TodoItem } from './components';

export const Todo = () => {
  const { data: loaderData } = useLoaderData();
  const [todoList, setTodoList] = React.useState([...loaderData].reverse());

  return (
    <>
      <div>Todo</div>
      <TodoForm todoList={todoList} setTodoList={setTodoList} />
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
};
