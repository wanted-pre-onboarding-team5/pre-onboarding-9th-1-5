import { deleteTodo, updateTodo } from 'apis/todoApi';
import Button from 'components/public/Button';
import { MESSAGE } from 'constants';
import { PROPERTY } from 'constants';
import { dispatchContext } from 'context/TodoProvider';
import { useContext } from 'react';
import { handleError } from 'utils/handleError';

const CardDisplay = ({ todoData, modify, setModify }) => {
  const dispatch = useContext(dispatchContext);

  const handleModify = () => {
    setModify(true);
  };

  const handleIsCompleted = (e) => {
    updateTodo({
      id: todoData.id,
      todo: todoData.todo,
      isCompleted: e.target.checked,
    })
      .then((res) => {
        dispatch({ type: 'UPDATE', payload: res.data });
      })
      .catch((error) => {
        e.target.checked = todoData.isCompleted;
        handleError(error);
      });
  };

  const handleDelete = () => {
    deleteTodo({ id: todoData.id })
      .then(() => {
        dispatch({ type: 'DELETE', payload: { id: todoData.id } });
        alert(MESSAGE.process.deleteTodo);
      })
      .catch((error) => {
        handleError(error);
      });
  };

  return (
    <label style={{ display: modify ? PROPERTY.display.hide : PROPERTY.display.show }}>
      <input
        type={PROPERTY.checkbox.isCompleted.type}
        defaultChecked={todoData.isCompleted}
        onChange={(e) => handleIsCompleted(e)}
      />
      <span
        style={{
          textDecorationLine: todoData.isCompleted
            ? PROPERTY.display.isCompleted
            : PROPERTY.display.notCompleted,
        }}
      >
        {todoData.todo}
      </span>
      <Button
        ButtonData={{
          text: PROPERTY.button.editMode.text,
          testId: PROPERTY.button.editMode.testId,
          handleClick: handleModify,
        }}
      />
      <Button
        ButtonData={{
          text: PROPERTY.button.deleteTodo.text,
          testId: PROPERTY.button.deleteTodo.testId,
          handleClick: handleDelete,
        }}
      />
    </label>
  );
};

export default CardDisplay;
