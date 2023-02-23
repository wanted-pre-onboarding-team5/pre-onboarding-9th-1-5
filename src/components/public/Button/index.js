import { useEffect } from 'react';

const Button = ({ props }) => {
  const { text, testId, handleClick, userData, handleActive, active } = props;

  if (handleActive) useEffect(handleActive, [userData]);

  return (
    <button
      data-testid={testId}
      onClick={(e) => handleClick({ e, userData })}
      disabled={active ? false : true}
    >
      {text}
    </button>
  );
};

export default Button;
