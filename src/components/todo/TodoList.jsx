import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todoList, updateTodo, deleteTodo }) => {
  return (
    <div>
      {todoList &&
        todoList.map((contents) => (
          <TodoItem
            key={contents.id}
            contents={contents}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
    </div>
  );
};

export default TodoList;
