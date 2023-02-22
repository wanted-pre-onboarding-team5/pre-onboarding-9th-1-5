export const FormInput = ({ type = 'text', name, label, onChange, placeholder, value }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        data-testid={name}
        name={name}
        id={name}
        onChange={onChange}
        autoComplete='off'
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};
