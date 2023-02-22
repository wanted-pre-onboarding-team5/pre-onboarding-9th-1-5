import Input from 'components/public/Input';
import Button from 'components/public/Button';
import { useContext, useRef, useState } from 'react';
import { createTodo } from 'apis/todoApi';
import { MESSAGE } from 'constants';
import { handleError } from 'utils/handleError';
import validator from 'utils/validator';
import { dispatchContext } from 'context/TodoProvider';

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
          dispatch({ type: 'CREATE', payload: res });
          alert(MESSAGE.process.create);
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
          testId: 'new-todo-input',
          type: 'text',
          placeholder: '할 일을 적어주세요.',
          defaultValue: todo,
          onChange: onChangeTodo,
          inputRef: inputRef,
        }}
      />
      <Button
        ButtonData={{
          text: '추가',
          testId: 'new-todo-add-button',
          handleClick: handleCreate,
        }}
      />
    </div>
  );
};

export default CardCreate;
