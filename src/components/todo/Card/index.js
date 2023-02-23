import { useState } from 'react';
import CardDisplay from '../CardDisplay';
import CardModify from '../CardModify';

const Card = ({ todoData }) => {
  const [modifyMode, setModifyMode] = useState(false);
  return (
    <li>
      <CardDisplay todoData={todoData} modifyMode={modifyMode} setModifyMode={setModifyMode} />
      <CardModify todoData={todoData} modifyMode={modifyMode} setModifyMode={setModifyMode} />
    </li>
  );
};

export default Card;
