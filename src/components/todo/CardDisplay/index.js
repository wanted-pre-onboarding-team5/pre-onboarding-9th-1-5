import Button from 'components/public/Button';
import { PROPERTY } from 'constants';

const CardDisplay = ({ todoData, modify, setModify }) => {
  const handleModify = () => {
    setModify(true);
  };

  return (
    <label style={ { display: modify ? PROPERTY.display.hide : PROPERTY.display.show } }>
      <input type={ PROPERTY.isCompleted.type } defaultChecked={ todoData.isCompleted } onChange={ () => { } } />
      <span
        style={ {
          textDecorationLine: todoData.isCompleted ? PROPERTY.display.isCompleted : PROPERTY.display.notCompleted,
        } }
      >
        { todoData.todo }
      </span>
      <Button
        ButtonData={ {
          text: PROPERTY.modifyModeButton.text,
          testId: PROPERTY.modifyModeButton.testId,
          handleClick: handleModify,
        } }
      />
      <Button
        ButtonData={ {
          text: PROPERTY.deleteButton.text,
          testId: PROPERTY.deleteButton.testId,
          handleClick: () => { },
        } }
      />
    </label>
  );
};

export default CardDisplay;
