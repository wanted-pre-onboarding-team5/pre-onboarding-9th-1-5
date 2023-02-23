import Input from 'components/public/Input';
import Button from 'components/public/Button';
import { useContext, useRef, useState } from 'react';
import { createTodo } from 'apis/todoApi';
import { MESSAGE } from 'constants';
import { handleError } from 'utils/handleError';
import validator from 'utils/validator';
import { dispatchContext } from 'context/TodoProvider';
import { PROPERTY } from 'constants';

const CardCreate = () => {
  const dispatch = useContext(dispatchContext);
  const inputRef = useRef();

  const [todo, setTodo] = useState('');

  const onChangeTodo = (e) => {
    setTodo(e.target.value);
  };

  const handleCreate = ({ e }) => {
    e.preventDefault();
    if (validator.isValidTodo(todo)) {
      createTodo({ todo })
        .then((res) => {
          inputRef.current.value = '';
          dispatch({ type: 'CREATE', payload: res.data });
          alert(MESSAGE.process.createTodo);
        })
        .catch((error) => {
          handleError(error);
        });
    }
  };

  return (
    <div>
      <Input
        InputData={{
          testId: PROPERTY.input.addTodo.testId,
          type: PROPERTY.input.addTodo.type,
          placeholder: PROPERTY.input.addTodo.placeholder,
          defaultValue: todo,
          onChange: onChangeTodo,
          inputRef: inputRef,
        }}
      />
      <Button
        ButtonData={{
          text: PROPERTY.button.addTodo.text,
          testId: PROPERTY.button.addTodo.testId,
          handleClick: handleCreate,
        }}
      />
    </div>
  );
};

export default CardCreate;
