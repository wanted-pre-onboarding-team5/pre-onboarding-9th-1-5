import { useAuthForm } from 'hooks/useAuthForm';
import { useMovePage } from 'hooks/useMovePage';
import { postSignIn } from 'apis/authApi';

export const SignIn = () => {
  const { isValidInput, userInput, handleInputChange } = useAuthForm();

  const [goTodo, goSignUp] = useMovePage(['/todo', '/signup']);

  const handleSignIn = async (e) => {
    e.preventDefault();
    await postSignIn(userInput);
    goTodo();
  };

  return (
    <>
      <h1>로그인</h1>
      <form onSubmit={handleSignIn}>
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
        <button type='submit' data-testid='signin-button' disabled={!isValidInput()}>
          로그인하기
        </button>
      </form>
      <button onClick={goSignUp}>회원가입하러 가기</button>
    </>
  );
};
