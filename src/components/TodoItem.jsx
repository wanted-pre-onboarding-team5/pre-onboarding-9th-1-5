export const TodoItem = ({ todo }) => {
  return (
    <li>
      <label>
        <input type='checkbox' checked={todo.isCompleted} onChange={() => {}} />
        <span>{todo.todo}</span>
      </label>
      <button data-testid='modify-button'>수정</button>
      <button data-testid='delete-button'>삭제</button>
    </li>
  );
};
