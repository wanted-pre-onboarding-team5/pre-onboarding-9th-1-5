import { useInput } from 'hooks/useInput';

export const useAuthForm = () => {
  const { value: userInput, setValue: setUserInput } = useInput({ email: '', password: '' });

  const isValidInput = () => {
    const { email, password } = userInput;
    const emailReg = /@/;
    if (!email || !emailReg.test(email)) return false;
    if (!password || password.length < 8) return false;
    return true;
  };

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  return {
    isValidInput,
    userInput,
    handleInputChange,
  };
};
