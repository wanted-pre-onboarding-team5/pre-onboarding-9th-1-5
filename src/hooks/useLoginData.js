import { useState } from 'react';

import { postSignIn } from 'apis/loginApi';
import { handleError } from 'utils/handleError';

import validator from 'utils/validator';
import { MESSAGE, USER_TOKEN_KEY } from 'constants';
import { useNavigate } from 'react-router-dom';
import { PATH } from 'constants';

export const useLoginData = () => {
  const navigate = useNavigate();
  const [userData, setUserDate] = useState({
    email: '',
    password: '',
  });

  const [activeButton, setActiveButton] = useState(false);

  const onChangeEmail = (e) => {
    setUserDate({ ...userData, email: e.target.value });
  };

  const onChangePassword = (e) => {
    setUserDate({ ...userData, password: e.target.value });
  };

  const handleSignIn = ({ e, userData }) => {
    e.preventDefault();
    if (validator.isValidEmail(userData.email) && validator.isValidPassword(userData.password)) {
      postSignIn(userData)
        .then((response) => {
          handleSuccess(response);
        })
        .catch((error) => {
          handleError(error);
        });
    }
  };

  const handleActiveButton = () => {
    if (validator.hasAtSign(userData.email) && validator.isMinimumLength(userData.password)) {
      return setActiveButton(true);
    }

    setActiveButton(false);
  };

  const handleSuccess = (response) => {
    localStorage.setItem(USER_TOKEN_KEY, response.data.access_token);
    alert(MESSAGE.process.success);
    navigate(PATH.todo);
  };

  return {
    onChangeEmail,
    onChangePassword,
    userData,
    handleSignIn,
    handleActiveButton,
    activeButton,
  };
};
