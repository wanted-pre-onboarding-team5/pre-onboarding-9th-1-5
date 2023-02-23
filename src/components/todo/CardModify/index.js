import Input from 'components/public/Input';
import Button from 'components/public/Button';
import { useState, useContext, useRef } from 'react';
import { dispatchContext } from 'context/TodoProvider';
import { handleError } from 'utils/handleError';
import { updateTodo } from 'apis/todoApi';
import { MESSAGE } from 'constants';
import validator from 'utils/validator';
import { PROPERTY } from 'constants';

const CardModify = ({ todoData, modifyMode, setModifyMode }) => {
  const dispatch = useContext(dispatchContext);
  const inputRef = useRef();

  const [modifyTodo, setModifyTodo] = useState(todoData.todo);

  const handleUpdate = ({ e }) => {
    e.preventDefault();
    if (validator.isValidTodo(modifyTodo) && validator.isChangeTodo(todoData.todo, modifyTodo)) {
      updateTodo({
        id: todoData.id,
        todo: modifyTodo,
        isCompleted: todoData.isCompleted,
      })
        .then((response) => {
          dispatch({ type: 'UPDATE', payload: response.data });
          setModifyMode(false);
          return alert(MESSAGE.process.updateTodo);
        })
        .catch((error) => {
          setModifyMode(false);
          inputRef.current.value = todoData.todo;
          return handleError(error);
        });
    }
    inputRef.current.value = todoData.todo;
    setModifyMode(false);
  };

  const handleCancel = ({ e }) => {
    e.preventDefault();
    inputRef.current.value = todoData.todo;
    setModifyMode(false);
  };

  const onChangeModify = () => {
    setModifyTodo(inputRef.current.value);
  };

  return (
    <form style={{ display: modifyMode ? PROPERTY.display.show : PROPERTY.display.hide }}>
      <Input
        props={{
          ...PROPERTY.input.editTodo,
          onChange: onChangeModify,
          defaultValue: modifyTodo,
          inputRef: inputRef,
        }}
      />
      <Button
        props={{
          ...PROPERTY.button.editConfirm,
          handleClick: handleUpdate,
        }}
      />
      <Button
        props={{
          ...PROPERTY.button.editCancel,
          handleClick: handleCancel,
        }}
      />
    </form>
  );
};

export default CardModify;
