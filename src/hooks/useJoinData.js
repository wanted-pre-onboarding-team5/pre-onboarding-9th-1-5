import { useCallback, useState } from 'react';

import { postSignUp } from 'apis/loginApi';
import { handleError } from 'utils/handleError';

import validator from 'utils/validator';
import { MESSAGE } from 'constants';
import { useNavigate } from 'react-router-dom';
import { PATH } from 'constants';

export const useJoinData = () => {
  const navigate = useNavigate();
  const [userData, setUserDate] = useState({
    email: '',
    password: '',
  });

  const [activeButton, setActiveButton] = useState(false);

  const onChangeEmail = useCallback(
    (e) => {
      setUserDate({ ...userData, email: e.target.value });
    },
    [userData],
  );

  const onChangePassword = useCallback(
    (e) => {
      setUserDate({ ...userData, password: e.target.value });
    },
    [userData],
  );

  const handleSignUp = ({ e, userData }) => {
    e.preventDefault();
    if (validator.isValidEmail(userData.email) && validator.isValidPassword(userData.password)) {
      postSignUp(userData)
        .then(() => {
          handleSuccess();
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

  const handleSuccess = () => {
    alert(MESSAGE.process.signUp);
    navigate(PATH.login);
  };

  return {
    onChangeEmail,
    onChangePassword,
    userData,
    handleSignUp,
    handleActiveButton,
    activeButton,
  };
};
