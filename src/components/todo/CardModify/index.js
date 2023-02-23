import Input from 'components/public/Input';
import Button from 'components/public/Button';
import { useState, useContext, useRef } from 'react';
import { dispatchContext } from 'context/TodoProvider';
import { handleError } from 'utils/handleError';
import { updateTodo } from 'apis/todoApi';
import { MESSAGE } from 'constants';
import validator from 'utils/validator';
import { PROPERTY } from 'constants';

const CardModify = ({ todoData, modify, setModify }) => {
  const dispatch = useContext(dispatchContext);
  const inputRef = useRef();

  const [modifyTodo, setModifyTodo] = useState(todoData.todo);

  const handleUpdate = ({ e }) => {
    e.preventDefault();
    if (validator.isValidTodo(modifyTodo)) {
      updateTodo({
        id: todoData.id,
        todo: modifyTodo,
        isCompleted: todoData.isCompleted,
      })
        .then((res) => {
          dispatch({ type: 'UPDATE', payload: res.data });
          setModify(false);
          alert(MESSAGE.process.updateTodo);
        })
        .catch((error) => {
          setModify(false);
          inputRef.current.value = todoData.todo;
          handleError(error);
        });
    }
  };

  const handleCancel = ({ e }) => {
    e.preventDefault();
    inputRef.current.value = todoData.todo;
    setModify(false);
  };

  const onChangeModify = () => {
    setModifyTodo(inputRef.current.value);
  };

  return (
    <form style={ { display: modify ? PROPERTY.display.show : PROPERTY.display.hide } }>
      <Input
        InputData={ {
          type: PROPERTY.input.editTodo.type,
          testId: PROPERTY.input.editTodo.testId,
          placeholder: PROPERTY.input.editTodo.placeholder,
          onChange: onChangeModify,
          defaultValue: modifyTodo,
          inputRef: inputRef,
        } }
      />
      <Button
        ButtonData={ {
          text: PROPERTY.button.editConfirm.text,
          testId: PROPERTY.button.editConfirm.testId,
          handleClick: handleUpdate,
        } }
      />
      <Button
        ButtonData={ {
          text: PROPERTY.button.editCancel.text,
          testId: PROPERTY.button.editCancel.testId,
          handleClick: handleCancel,
        } }
      />
    </form>
  );
};

export default CardModify;
