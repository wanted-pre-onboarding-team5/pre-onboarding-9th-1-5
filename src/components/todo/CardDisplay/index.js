import Button from 'components/public/Button';

const CardDisplay = ({ todoData, modify, setModify }) => {
  const handleModify = () => {
    setModify(true);
  };

  return (
    <label style={{ display: modify ? 'none' : 'flex' }}>
      <input type='checkbox' defaultChecked={todoData.isCompleted} onChange={() => {}} />
      <span
        style={{
          textDecorationLine: todoData.isCompleted ? 'line-through' : 'none',
        }}
      >
        {todoData.todo}
      </span>
      <Button
        ButtonData={{
          text: '수정',
          handleClick: handleModify,
          testId: 'modify-button',
        }}
      />
      <Button
        ButtonData={{
          text: '삭제',
          handleClick: () => {},
          testId: 'delete-button',
        }}
      />
    </label>
  );
};

export default CardDisplay;
