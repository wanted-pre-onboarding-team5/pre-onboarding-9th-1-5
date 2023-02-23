import { postSignUp } from 'apis/authApi';
import { useAuthForm } from 'hooks/useAuthForm';
import { useMovePage } from 'hooks/useMovePage';

export const SignUp = () => {
  const { isValidInput, userInput, handleInputChange } = useAuthForm();

  const [goSignIn] = useMovePage('/signin');

  const handleSignUp = async (e) => {
    e.preventDefault();
    await postSignUp(userInput);
    goSignIn();
  };

  return (
    <>
      <h1>회원가입</h1>
      <form onSubmit={handleSignUp}>
        <input
          data-testid='email-input'
          value={userInput.email}
          onChange={handleInputChange}
          name='email'
        />
        <input
          data-testid='password-input'
          value={userInput.password}
          onChange={handleInputChange}
          type='password'
          name='password'
        />
        <button type='submit' data-testid='signup-button' disabled={!isValidInput()}>
          회원가입하기
        </button>
      </form>
      <button onClick={goSignIn}>로그인하러 가기</button>
    </>
  );
};
