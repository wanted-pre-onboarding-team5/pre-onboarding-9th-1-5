import React from 'react';
import { useState } from 'react';

const TodoList = ({ todos, setTodos }) => {
  return todos.map((todo) => (
    <li key={todo.id}>
      <span>{todo.todo}</span>
    </li>
  ));
};

export default TodoList;
