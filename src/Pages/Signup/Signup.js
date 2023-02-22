import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import API from 'API';

export const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pwError, setPwError] = useState('');
  const [mailError, setMailError] = useState('');

  //비밀번호 조건
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (event.target.value.length < 8) {
      setPwError('비밀번호는 8자리 이상이어야 합니다.');
    } else {
      setPwError('');
    }
  };

  //이메일 조건
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (!event.target.value.includes('@')) {
      setMailError('이메일은 "@"를 포함하고 있어야 합니다.');
    } else {
      setMailError('');
    }
  };

  const navigate = useNavigate();
  const submit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${API.signup}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error('회원가입 실패');
      }

      alert('회원가입 되었습니다.');
      navigate('/signin');
    } catch (error) {
      alert('회원가입에 실패했습니다.');
      console.error(error);
    }
  };

  return (
    <div>
      <form>
        <div>
          <h4>회원가입</h4>
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
              className='form-control'
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
          회원가입
        </button>
      </form>
    </div>
  );
};
