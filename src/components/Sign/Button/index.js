import React from 'react';
import { useEffect, useState } from 'react';
import validator from 'utils/validator';

const Button = ({ ButtonData }) => {
  const { text, testId, handleClick, userData } = ButtonData;
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (
      validator.hasEmailAtSign(userData.email) &&
      validator.hasPasswordMinimumLength(userData.password)
    ) {
      return setActive(true);
    }

    setActive(false);
  }, [userData]);
  return (
    <button
      data-testid={testId}
      onClick={(e) => handleClick(e, userData)}
      disabled={active ? false : true}
    >
      {text}
    </button>
  );
};

export default Button;
