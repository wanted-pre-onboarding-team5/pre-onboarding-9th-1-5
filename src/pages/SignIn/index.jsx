import { useAuthForm } from 'hooks/useAuthForm';
import { useMovePage } from 'hooks/useMovePage';
import { postSignIn } from 'apis/authApi';
import { PATH_ROUTE } from 'constants';

export const SignIn = () => {
  const { emailRef, passwordRef, userAccount, handleAccountChange, isValidAccount } = useAuthForm();

  const [goTodo, goSignUp] = useMovePage([PATH_ROUTE.todo, PATH_ROUTE.signUp]);

  const handleSignIn = async (e) => {
    e.preventDefault();
    const { accessToken } = await postSignIn(userAccount);
    if (!accessToken) return;
    goTodo();
  };

  return (
    <>
      <h1>로그인</h1>
      <form onSubmit={handleSignIn}>
        <input
          name='email'
          data-testid='email-input'
          ref={emailRef}
          value={userAccount.email}
          onChange={handleAccountChange}
        />
        <input
          name='password'
          data-testid='password-input'
          ref={passwordRef}
          value={userAccount.password}
          onChange={handleAccountChange}
          type='password'
        />
        <button type='submit' data-testid='signin-button' disabled={!isValidAccount()}>
          로그인하기
        </button>
      </form>
      <button onClick={goSignUp}>회원가입하러 가기</button>
    </>
  );
};
