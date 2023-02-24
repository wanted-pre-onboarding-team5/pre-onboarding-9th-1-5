import { useAuthForm } from 'hooks/useAuthForm';
import { useMovePage } from 'hooks/useMovePage';
import { postSignIn } from 'apis/authApi';
import { PATH } from 'constants';

export const SignIn = () => {
  const {
    isButtonDisabled,
    emailRef,
    passwordRef,
    emailInput,
    passwordInput,
    handleEmailChange,
    handlePasswordChange,
  } = useAuthForm();

  const [goTodo, goSignUp] = useMovePage([PATH.todo, PATH.signUp]);

  const handleSignIn = async (e) => {
    e.preventDefault();
    const { accessToken } = await postSignIn({ email: emailInput, password: passwordInput });
    if (!accessToken) return;
    goTodo();
  };

  return (
    <>
      <h1>로그인</h1>
      <form onSubmit={handleSignIn}>
        <input
          data-testid='email-input'
          ref={emailRef}
          value={emailInput}
          onChange={handleEmailChange}
        />
        <input
          data-testid='password-input'
          ref={passwordRef}
          value={passwordInput}
          onChange={handlePasswordChange}
          type='password'
        />
        <button type='submit' data-testid='signin-button' disabled={isButtonDisabled}>
          로그인하기
        </button>
      </form>
      <button onClick={goSignUp}>회원가입하러 가기</button>
    </>
  );
};
