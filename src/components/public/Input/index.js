const Input = ({ InputData }) => {
  const { type, placeholder, testId, onChange, autoComplete, defaultValue, inputRef } = InputData;
  return (
    <input
      data-testid={testId}
      type={type}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={onChange}
      autoComplete={autoComplete}
      ref={inputRef}
    />
  );
};

export default Input;
