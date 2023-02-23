import React from 'react';
import { useNavigate } from 'react-router-dom';

const TextLink = ({ props }) => {
  const { text, link } = props;
  const navigate = useNavigate();
  return <div onClick={() => navigate(link)}>{text}</div>;
};

export default TextLink;
