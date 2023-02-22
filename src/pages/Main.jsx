import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate('/signup');
  };

  const goToSignIn = () => {
    navigate('/signin');
  };
  return (
    <div>
      <div onClick={goToSignUp}>
        <p>회원가입</p>
      </div>
      <div onClick={goToSignIn}>
        <p>로그인</p>
      </div>
    </div>
  );
};

export default Main;
