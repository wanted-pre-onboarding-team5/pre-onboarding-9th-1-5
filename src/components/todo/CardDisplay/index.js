import { deleteTodo, updateTodo } from 'apis/todoApi';
import Button from 'components/public/Button';
import Input from 'components/public/Input';
import { MESSAGE } from 'constants';
import { PROPERTY } from 'constants';
import { dispatchContext } from 'context/TodoProvider';
import { useContext } from 'react';
import { handleError } from 'utils/handleError';

const CardDisplay = ({ todoData, modifyMode, setModifyMode }) => {
  const dispatch = useContext(dispatchContext);

  const handleModifyMode = () => {
    setModifyMode(true);
  };

  const handleIsCompleted = (e) => {
    updateTodo({
      id: todoData.id,
      todo: todoData.todo,
      isCompleted: e.target.checked,
    })
      .then((response) => {
        dispatch({ type: 'UPDATE', payload: response.data });
      })
      .catch((error) => {
        e.target.checked = todoData.isCompleted;
        handleError(error);
      });
  };

  const handleDelete = () => {
    if (confirm(MESSAGE.process.askDelete)) {
      deleteTodo({ id: todoData.id })
        .then(() => {
          dispatch({ type: 'DELETE', payload: { id: todoData.id } });
          alert(MESSAGE.process.deleteTodo);
        })
        .catch((error) => {
          handleError(error);
        });
    }
  };

  return (
    <label style={{ display: modifyMode ? PROPERTY.display.hide : PROPERTY.display.show }}>
      <Input
        props={{
          ...PROPERTY.checkbox.isCompleted,
          defaultChecked: todoData.isCompleted,
          onChange: (e) => handleIsCompleted(e),
        }}
      />
      <span
        style={{
          textDecorationLine: todoData.isCompleted
            ? PROPERTY.display.isCompleted.true
            : PROPERTY.display.isCompleted.false,
        }}
      >
        {todoData.todo}
      </span>
      <Button
        props={{
          ...PROPERTY.button.editMode,
          handleClick: handleModifyMode,
        }}
      />
      <Button
        props={{
          ...PROPERTY.button.deleteTodo,
          handleClick: handleDelete,
        }}
      />
    </label>
  );
};

export default CardDisplay;
