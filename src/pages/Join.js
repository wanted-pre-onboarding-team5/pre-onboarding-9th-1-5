import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { signUpApi } from 'apis/sign';
import { handleError } from 'utils/handleError';

import Sign from 'components/Sign';
import validator from 'utils/validator';
import { message } from 'constants/message';
import useRedirect from 'hooks/useRedirect';

const Join = () => {
  useRedirect();
  const navigate = useNavigate();
  const [userData, setUserDate] = useState({
    email: '',
    password: '',
  });

  const onChangeEmail = (e) => {
    setUserDate({ ...userData, email: e.target.value });
  };

  const onChangePassword = (e) => {
    setUserDate({ ...userData, password: e.target.value });
  };

  const handleSignUp = (e, userData) => {
    e.preventDefault();
    if (validator.isValidEmail(userData.email) && validator.isValidPassword(userData.password)) {
      signUpApi(userData)
        .then(() => {
          handleSuccess();
        })
        .catch((error) => {
          handleError(error);
        });
    }
  };

  const handleSuccess = () => {
    alert(message.process.success);
    navigate('/signin');
  };

  const joinData = {
    title: '회원가입',
    inputs: {
      email: {
        id: 1,
        type: 'text',
        placeholder: '이메일',
        testId: 'email-input',
        onChange: onChangeEmail,
      },
      password: {
        id: 2,
        type: 'password',
        placeholder: '비밀번호',
        testId: 'password-input',
        autoComplete: 'off',
        onChange: onChangePassword,
      },
    },
    buttonData: {
      text: '가입하기',
      testId: 'signup-button',
      userData: userData,
      handleClick: handleSignUp,
    },
    toggleData: {
      text: '이미 회원이신가요? 로그인',
      handleNavigate: '/signin',
    },
  };

  return (
    <div>
      <Sign data={joinData} />
    </div>
  );
};

export default Join;
