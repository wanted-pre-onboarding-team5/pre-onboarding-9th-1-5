import { useState } from 'react';
import CardDisplay from '../CardDisplay';
import CardModify from '../CardModify';

const Card = ({ todoData }) => {
  const [modify, setModify] = useState(false);
  return (
    <div>
      <CardDisplay todoData={todoData} modify={modify} setModify={setModify} />
      <CardModify todoData={todoData} modify={modify} setModify={setModify} />
    </div>
  );
};

export default Card;
