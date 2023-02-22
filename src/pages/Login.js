import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInApi } from 'apis/sign';
import { handleError } from 'utils/handleError';

import Sign from 'components/Sign';
import validator from 'utils/validator';
import { message } from 'constants/message';
import useRedirect from 'hooks/useRedirect';

const Login = () => {
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

  const handleSignIn = (e, userData) => {
    e.preventDefault();
    if (validator.isValidEmail(userData.email) && validator.isValidPassword(userData.password)) {
      signInApi(userData)
        .then((res) => {
          handleSuccess(res);
        })
        .catch((error) => {
          handleError(error);
        });
    }
  };

  const handleSuccess = (res) => {
    localStorage.setItem('access_token', res.data.access_token);
    alert(message.process.success);
    navigate('/todo');
  };

  const loginData = {
    title: "TODAY'S TO DO",
    inputs: {
      email: {
        id: 1,
        type: 'text',
        placeholder: '아이디 또는 이메일',
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
      text: '로그인',
      testId: 'signin-button',
      userData: userData,
      handleClick: handleSignIn,
    },
    toggleData: {
      text: '아직 회원이 아니신가요? 회원가입',
      handleNavigate: '/signup',
    },
  };

  return (
    <div>
      <Sign data={loginData} />
    </div>
  );
};

export default Login;
