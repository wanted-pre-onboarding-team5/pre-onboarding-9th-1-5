import { useEffect, useState } from 'react';
import Card from '../Card';
import { getTodos } from 'apis/todoApi';
import { handleError } from 'utils/handleError';

const ListSection = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const getTodoList = () => {
      getTodos()
        .then(() => {
          setTodoList([
            {
              id: 1,
              todo: 'todo2',
              isCompleted: false,
              userId: 1,
            },
            {
              id: 2,
              todo: 'todo3',
              isCompleted: false,
              userId: 1,
            },
          ]);
        })
        .catch((error) => {
          handleError(error);
        });
    };
    getTodoList();
  }, []);

  return (
    <div>
      {todoList && todoList.map((todoData) => <Card key={todoData.id} todoData={todoData} />)}
    </div>
  );
};

export default ListSection;
