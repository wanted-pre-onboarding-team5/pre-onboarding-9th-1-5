import React from 'react';

const Input = ({ InputData }) => {
  const { type, placeholder, testId, onChange, autoComplete, defaultValue, inputRef } = InputData;
  return (
    <input
      type={type}
      placeholder={placeholder}
      data-testid={testId}
      defaultValue={defaultValue}
      onChange={onChange}
      autoComplete={autoComplete}
      ref={inputRef}
    />
  );
};

export default Input;
