import React from 'react';
import { SignUpForm } from 'features';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div>
      <div>
        <h1>회원가입</h1>
        <SignUpForm />
        <div>
          <span>이미 계정이 있나요? </span>
          <Link to='/signin'>회원가입하기</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
