export const Button = ({ content, onClick, isValid = true, ...props }) => {
  return (
    <button onClick={onClick} disabled={!isValid} {...props}>
      {content}
    </button>
  );
};
