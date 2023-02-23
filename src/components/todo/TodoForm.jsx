import { useState } from 'react';

const TodoForm = ({ postTodo }) => {
  const initialState = {
    id: 0,
    todo: '',
    isCompleted: false,
    userId: 0,
  };
  const [todoData, setTodoData] = useState(initialState);

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setTodoData({ ...todoData, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (todoData.todo.trim() === '') return;
    postTodo(todoData.todo);
    setTodoData(initialState);
  };

  return (
    <form onSubmit={onSubmitHandler} className='add-form'>
      <label
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        todo input:
        <input
          type='text'
          name='todo'
          value={todoData.todo}
          onChange={onChangeHandler}
          data-testid='new-todo-input'
          autoFocus
        />
      </label>
      <button type='submit' data-testid='new-todo-add-button'>
        추가
      </button>
    </form>
  );
};

export default TodoForm;
