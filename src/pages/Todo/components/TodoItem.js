const TodoItem = ({ todo }) => {
  return (
    <li>
      <label htmlFor='todo'>
        <input name='todo' type='checkbox' defaultChecked={todo.isCompleted} />
        <span>{todo.todo}</span>
      </label>
      <div>
        <button data-testid='modify-button'>수정</button>
        <button data-testid='delete-button'>삭제</button>
      </div>
    </li>
  );
};

export default TodoItem;
