import { FormInput, Button } from './index';
import { Link } from 'react-router-dom';

export const AuthForm = ({ type, onChange, onSubmit, form, error, isValid }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <FormInput
          label='이메일'
          type='email'
          name={'email-input'}
          placeholder='test@example.com'
          onChange={onChange}
          value={form['email-input']}
        />
        <FormInput
          label='비밀번호'
          type='password'
          name={'password-input'}
          placeholder='비밀번호를 입력하세요.'
          onChange={onChange}
          value={form['password-input']}
        />
        <span>{error}</span>
        <Button
          data-testid={type === 'signin' ? 'signin-button' : 'signup-button'}
          content={type === 'signin' ? '로그인' : '회원가입'}
          isValid={isValid}
        />
      </form>
      <div>
        {type === 'signin' ? <Link to='/signup'>회원가입</Link> : <Link to='/signin'>로그인</Link>}
      </div>
    </>
  );
};
