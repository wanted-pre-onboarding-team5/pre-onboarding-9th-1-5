import React from 'react';
import { useNavigate } from 'react-router-dom';
import validator from './validator';
import authInstance from 'services/auth-server';

function SignInForm() {
  const navigate = useNavigate();
  const [userInput, setUserInput] = React.useState({
    email: '',
    password: '',
  });
  const [alertMsg, setAlertMsg] = React.useState({
    emailError: '',
    passwordError: '',
    signInError: '',
  });

  const handleSignIn = async (event) => {
    event.preventDefault();

    try {
      const res = await authInstance.post('/signin', userInput);
      localStorage.setItem('AUTH_TOKEN', res.data.access_token);
      navigate('/todo');
    } catch (error) {
      setAlertMsg({
        ...alertMsg,
        signInError: error.response ? error.response.data.message : null,
      });
    }
  };

  const handleEmailInput = (event) => {
    const newValue = event.target.value;
    const isValidEmail = validator.checkEmail(newValue);

    setUserInput({ ...userInput, email: newValue });
    setAlertMsg({
      ...alertMsg,
      emailError: isValidEmail || newValue === '' ? '' : '올바른 이메일이 아닙니다',
    });
  };

  const handlePasswordInput = (event) => {
    const newValue = event.target.value;
    const isValidPassword = validator.checkPassword(newValue);

    setUserInput({ ...userInput, password: newValue });
    setAlertMsg({
      ...alertMsg,
      passwordError: isValidPassword || newValue === '' ? '' : '올바른 비밀번호가 아닙니다',
    });
  };

  return (
    <>
      {alertMsg.signInError && <div>{alertMsg.signInError}</div>}
      <form onSubmit={handleSignIn}>
        <div>
          <input
            id='email'
            data-testid='email-input'
            type='email'
            placeholder='이메일'
            value={userInput.email}
            onChange={handleEmailInput}
          />
          <div>{alertMsg.emailError}</div>
        </div>
        <div>
          <input
            id='password'
            data-testid='password-input'
            type='password'
            placeholder='비밀번호'
            value={userInput.password}
            onChange={handlePasswordInput}
          />
          <div>{alertMsg.passwordError}</div>
        </div>
        <button
          data-testid='signin-button'
          type='submit'
          disabled={
            userInput.email === '' ||
            userInput.password === '' ||
            alertMsg.emailError !== '' ||
            alertMsg.passwordError !== ''
          }
        >
          이메일로 계속하기
        </button>
      </form>
    </>
  );
}

export default SignInForm;
