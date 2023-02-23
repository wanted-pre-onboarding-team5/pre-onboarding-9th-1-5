import { useAuthForm } from 'hooks/useAuthForm';
import { useMovePage } from 'hooks/useMovePage';
import { postSignIn } from 'apis/loginApi';
import { STORAGE } from 'constants';

export const SignIn = () => {
  const { isValidInput, userInput, handleInputChange } = useAuthForm();

  const [goTodo, goSignUp] = useMovePage(['/todo', '/signup']);

  const handleSignIn = async (e) => {
    e.preventDefault();
    const { accessToken } = await postSignIn(userInput);
    if (!accessToken) return;
    localStorage.setItem(STORAGE.userToken, accessToken);
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
