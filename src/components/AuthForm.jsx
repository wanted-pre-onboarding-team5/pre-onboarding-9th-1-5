import { Link } from 'react-router-dom';

export const AuthForm = ({ type, formInputs, handleChange, handleSubmit, isValid }) => {
  const { email: emailValue, password: passwordValue } = formInputs;

  return (
    <>
      <h1>{type === 'signin' ? '로그인' : '회원가입'}</h1>
      <form onSubmit={handleSubmit}>
        <input
          data-testid='email-input'
          type='email'
          name='email'
          value={emailValue}
          onChange={handleChange}
        />
        <input
          data-testid='password-input'
          type='password'
          name='password'
          value={passwordValue}
          onChange={handleChange}
        />
        <button
          type='submit'
          data-testid={`${type === 'signin' ? 'signin' : 'signup'}-button`}
          disabled={!isValid && 'disabled'}
        >
          {type === 'signin' ? '로그인' : '회원가입'}
        </button>
      </form>
      {type === 'signin' ? <Link to='/signup'>회원가입</Link> : <Link to='/signin'>로그인</Link>}
    </>
  );
};
