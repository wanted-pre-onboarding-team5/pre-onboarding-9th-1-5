const Input = ({ props }) => {
  const { type, placeholder, testId, onChange, autoComplete, defaultValue, inputRef } = props;
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
