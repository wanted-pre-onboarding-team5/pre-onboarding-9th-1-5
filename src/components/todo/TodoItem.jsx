import { Fragment } from 'react';

const TodoItem = ({ contents }) => {
  const { isCompleted, todo } = contents;

  return (
    <li>
      <label>
        <input type='checkbox' checked={isCompleted} />
        <Fragment>
          <input data-testid='modify-input' type='text' value={todo} autoFocus />
        </Fragment>
      </label>
    </li>
  );
};

export default TodoItem;
