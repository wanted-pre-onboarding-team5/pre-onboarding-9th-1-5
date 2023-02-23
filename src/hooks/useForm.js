import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { USER_TOKEN_KEY } from 'constants';
import { postSignIn, postSignUp } from 'apis/auth';
import { checkValid } from 'utils/validator';

export const useForm = (type) => {
  const navigate = useNavigate();
  const [formInputs, setFormInputs] = useState({
    email: '',
    password: '',
  });

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormInputs({ ...formInputs, [name]: value });
    },
    [formInputs],
  );

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        if (type === 'signin') {
          const { access_token } = await postSignIn({
            email: formInputs.email,
            password: formInputs.password,
          });
          localStorage.setItem(USER_TOKEN_KEY, access_token);
          navigate('/todo');
        } else {
          await postSignUp({
            email: formInputs.email,
            password: formInputs.password,
          });
          navigate('/signin');
        }
      } catch (e) {
        console.error(e);
      }
    },
    [formInputs, navigate],
  );

  return {
    formInputs,
    handleChange,
    handleSubmit,
    isValid: checkValid(formInputs),
  };
};
