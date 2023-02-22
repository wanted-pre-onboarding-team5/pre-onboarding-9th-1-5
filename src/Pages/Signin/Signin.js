import { useState } from 'react';

import API from 'API';

export const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pwError, setPwError] = useState('');
  const [mailError, setMailError] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (event.target.value.length < 8) {
      setPwError('비밀번호는 8자리 이상이어야 합니다.');
    } else {
      setPwError('');
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (!event.target.value.includes('@')) {
      setMailError('이메일은 "@"를 포함하고 있어야 합니다.');
    } else {
      setMailError('');
    }
  };

  const submit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${API.signin}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      if (!response.ok) {
        throw new Error('로그인 실패');
      }

      const data = await response.json();
      localStorage.setItem('JWT', data.access_token);
      window.location.replace('/todo');
      alert('로그인되었습니다.');
    } catch (error) {
      alert('로그인에 실패했습니다.');
      console.error(error.message);
    }
  };

  return (
    <div>
      <form>
        <div>
          <h4>로그인</h4>
          <hr />
          <label htmlFor='inputEmail'>이메일</label>
          <div>
            <input
              id='inputEmail'
              type='email'
              value={email}
              data-testid='email-input'
              placeholder='이메일을 입력하세요.'
              onChange={handleEmailChange}
            ></input>
            {mailError && <p style={{ color: 'red' }}>{mailError}</p>}
          </div>
        </div>
        <div>
          <label htmlFor='inputPassword'>패스워드</label>
          <div>
            <input
              id='inputPassowrd'
              type='password'
              value={password}
              data-testid='password-input'
              placeholder='패스워드를 입력하세요.'
              onChange={handlePasswordChange}
            ></input>
            {pwError && <p style={{ color: 'red' }}>{pwError}</p>}
          </div>
        </div>
        <button
          disabled={pwError || mailError || email === '' || password === ''}
          data-testid='signin-button'
          onClick={submit}
        >
          로그인
        </button>
      </form>
    </div>
  );
};
