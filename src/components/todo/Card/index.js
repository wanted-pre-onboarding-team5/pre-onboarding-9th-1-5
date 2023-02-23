import { useState } from 'react';
import CardDisplay from '../CardDisplay';
import CardModify from '../CardModify';

const Card = ({ todoData }) => {
  const [modify, setModify] = useState(false);
  return (
    <li>
      <CardDisplay todoData={ todoData } modify={ modify } setModify={ setModify } />
      <CardModify todoData={ todoData } modify={ modify } setModify={ setModify } />
    </li>
  );
};

export default Card;
