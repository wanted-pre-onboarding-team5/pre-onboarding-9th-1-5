import React from 'react';
import { SignInForm } from 'features';
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <div>
      <div>
        <h1>로그인</h1>
        <SignInForm />
        <div>
          <span>아직 계정이 없나요? </span>
          <Link to='/signup'>회원가입하기</Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
