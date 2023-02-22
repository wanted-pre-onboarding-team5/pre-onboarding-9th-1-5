import { useRef, useState } from 'react';
import { useInput } from 'hooks/useInput';

export const useCheckAccount = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { value: emailInput, setValue: setEmailInput } = useInput('');
  const { value: passwordInput, setValue: setPasswordInput } = useInput('');

  const isValidAccount = () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const emailReg = /@/;
    if (!email || !emailReg.test(email)) return false;
    if (!password || password.length < 8) return false;
    return true;
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
