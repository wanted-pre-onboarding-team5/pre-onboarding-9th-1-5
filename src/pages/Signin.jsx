import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import useInput from '../hooks/useInput';
import { signinApi } from '../shared/api';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useInput('');
  const [emailError, setEmailError] = useState(false);
  const [emailNotice, setEmailNotice] = useState(true);
  const [password, setPassword] = useInput('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordNotice, setPasswordNotice] = useState(true);

  const emailRef = useRef();
  const passwordRef = useRef();

  // 로컬 스토리지 토큰 확인
  const is_token = localStorage.getItem('access_token') ? true : false;

  // 로그인 상태이면 todo 화면으로
  useEffect(() => {
    if (is_token) navigate('/todo');
  }, [is_token, navigate]);

  const emailFilter = useCallback((email) => {
    const filter = /@/;
    return filter.test(email);
  }, []);

  const emailChecker = useCallback(() => {
    if (!email.trim()) {
      setEmailError(true);
      setEmailNotice(true);
      return false;
    }
    if (!emailFilter(email)) {
      setEmailError(true);
      return false;
    }
    setEmailError(false);
    return true;
  }, [emailFilter, email]);

  const onBlurEmailInput = useCallback(
    (e) => {
      e.preventDefault();
      if (!email.trim()) return;
      emailChecker();
      if (!email.trim()) {
        setEmailNotice(true);
        return;
      }
      setEmailNotice(false);
    },
    [emailChecker],
  );

  const passwordFilter = useCallback((password) => {
    const filter = /(?=.{8,})/;
    return filter.test(password);
  }, []);

  const passwordChecker = useCallback(() => {
    if (!password.trim()) {
      setPasswordError(true);
      return false;
    }
    if (!passwordFilter(password)) {
      setPasswordError(true);
      return false;
    }
    setPasswordError(false);
    return true;
  }, [password, passwordFilter]);

  const onBlurPasswordInput = useCallback(() => {
    setPasswordNotice(false);
    if (!passwordChecker()) return;
  }, [passwordChecker]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (emailError || !email.trim()) {
        emailRef.current.focus();
        return;
      }
      if (passwordError || !password.trim()) {
        passwordRef.current.focus();
        return;
      }

      signinApi(email, password)
        .then((res) => {
          if (res.statusText === 'OK') {
            localStorage.setItem('access_token', res.data.access_token);
            navigate('/todo');
          }
        })
        .catch((err) => {
          alert(err);
        });
    },
    [email, password, navigate, emailError, passwordError],
  );

  const onClickSignup = useCallback(() => {
    navigate('/signup');
  }, [navigate]);

  return (
    <Fragment>
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <input
              ref={emailRef}
              type='text'
              value={email}
              onChange={setEmail}
              onBlur={onBlurEmailInput}
              placeholder='email'
              data-testid='email-input'
            />
            {emailNotice && <span className='black'>@를 포함해주세요.</span>}
            {!emailNotice && emailError && <span>@를 꼭 포함해주세요!</span>}
            {!emailNotice && !emailError && <span className='black'>사용가능한 email 입니다.</span>}
          </div>
          <div>
            <input
              ref={passwordRef}
              type='password'
              value={password}
              onChange={setPassword}
              onBlur={onBlurPasswordInput}
              placeholder='password'
              data-testid='password-input'
            />
            {passwordNotice && (
              <span className='black'>비밀번호는 8글자 이상으로 작성해주세요.</span>
            )}
            {!passwordNotice && passwordError && (
              <span>비밀번호는 꼭 8글자 이상으로 작성해주세요!</span>
            )}
            {!passwordNotice && !passwordError && (
              <span className='black'>사용가능한 비밀번호입니다.</span>
            )}
          </div>
          <button
            className={
              !emailNotice && !emailError && !passwordNotice && !passwordError ? 'possible' : null
            }
            type='submit'
            data-testid='signin-button'
            disabled={(!emailNotice && emailError) || (!passwordNotice && passwordError)}
          >
            로그인
          </button>
        </form>
        <div>
          <span>계정이 없으신가요? 지금 바로 가입하세요!</span>
          <button onClick={onClickSignup}>회원가입</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Signin;
