const button = ({ ButtonData }) => {
  const { text, testId, handleClick, data } = ButtonData;
  return (
    <button data-testid={testId} onClick={(e) => handleClick({ e, data })}>
      {text}
    </button>
  );
};

export default button;
