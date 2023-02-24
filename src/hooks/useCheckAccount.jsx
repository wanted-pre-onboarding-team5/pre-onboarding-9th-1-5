import { useRef, useState } from 'react';
import { useInput } from 'hooks/useInput';
import { validateAccount } from 'utils';

export const useCheckAccount = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { value: emailInput, setValue: setEmailInput } = useInput('');
  const { value: passwordInput, setValue: setPasswordInput } = useInput('');

  const isValidAccount = () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const isValid = validateAccount(email, password);
    return isValid;
  };

  const checkAccountAndSetButton = () => {
    const isValid = isValidAccount();
    setIsButtonDisabled(!isValid);
  };

  const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
    checkAccountAndSetButton();
  };

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
    checkAccountAndSetButton();
  };

  return {
    isButtonDisabled,
    emailRef,
    passwordRef,
    emailInput,
    passwordInput,
    handleEmailChange,
    handlePasswordChange,
  };
};
