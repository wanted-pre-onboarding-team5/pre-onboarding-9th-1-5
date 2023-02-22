import { postSignUp } from 'apis/loginApi';
import { useCheckAccount } from 'hooks/useCheckAccount';
import { useMovePage } from 'hooks/useMovePage';

export const SignUp = () => {
  const {
    isButtonDisabled,
    emailRef,
    passwordRef,
    emailInput,
    passwordInput,
    handleEmailChange,
    handlePasswordChange,
  } = useCheckAccount();

  const [goSignIn] = useMovePage('/signin');

  const handleSignUp = async (e) => {
    e.preventDefault();
    await postSignUp({ email: emailInput, password: passwordInput });
    goSignIn();
  };

  return (
    <>
      <h1>회원가입</h1>
      <form onSubmit={handleSignUp}>
        <input
          data-testid="email-input"
          ref={emailRef}
          value={emailInput}
          onChange={handleEmailChange}
        />
        <input
          data-testid="password-input"
          ref={passwordRef}
          value={passwordInput}
          onChange={handlePasswordChange}
          type="password"
        />
        <button type="submit" data-testid="signup-button" disabled={isButtonDisabled}>
          회원가입하기
        </button>
      </form>
      <button onClick={goSignIn}>로그인하러 가기</button>
    </>
  );
};
