import React from 'react';
import { useNavigate } from 'react-router-dom';

const Toggle = ({ ToggleData }) => {
  const { text, handleNavigate } = ToggleData;
  const navigate = useNavigate();
  return <div onClick={() => navigate(handleNavigate)}>{text}</div>;
};

export default Toggle;
