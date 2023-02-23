import { useContext, useEffect } from 'react';
import Card from '../Card';
import { getTodos } from 'apis/todoApi';
import { handleError } from 'utils/handleError';
import { dispatchContext, todoContext } from 'context/TodoProvider';

const ListSection = () => {
  const todoList = useContext(todoContext);
  const dispatch = useContext(dispatchContext);

  useEffect(() => {
    const getTodoList = () => {
      getTodos()
        .then((res) => {
          dispatch({ type: 'GET', payload: res.data });
        })
        .catch((error) => {
          handleError(error);
        });
    };
    getTodoList();
  }, [dispatch]);

  return (
    <div>
      {todoList && todoList.map((todoData) => <Card key={todoData.id} todoData={todoData} />)}
    </div>
  );
};

export default ListSection;
