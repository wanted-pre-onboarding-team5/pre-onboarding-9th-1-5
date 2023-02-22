import React from 'react';
import Input from 'components/public/Input';
import Button from './Button';
import Toggle from './Toggle';

const Sign = ({ data }) => {
  const { title, inputs, buttonData, toggleData } = data;
  return (
    <form>
      <div>{title}</div>
      {Object.values(inputs).map((input) => (
        <Input key={input.id} InputData={input} />
      ))}
      <Button ButtonData={buttonData} />
      <Toggle ToggleData={toggleData} />
    </form>
  );
};

export default Sign;
