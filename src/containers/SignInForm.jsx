import { AuthForm } from 'components';
import { useState, useCallback } from 'react';
import { signIn } from 'lib/api/auth';
import { setAuthToken } from 'lib/utils/authToken';
import { useNavigate } from 'react-router-dom';
import { isValid } from 'lib/utils/validation';

export const SignInForm = () => {
  const [form, setForm] = useState({
    'email-input': '',
    'password-input': '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
      setError('');
    },
    [form],
  );

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const response = await signIn({
          email: form['email-input'],
          password: form['password-input'],
        });
        setAuthToken(response.access_token);
        navigate('/todo');
      } catch (e) {
        setError(e.response.data.message);
      }
    },
    [form, navigate],
  );

  return (
    <>
      <AuthForm
        type='signin'
        form={form}
        error={error}
        onChange={handleChange}
        onSubmit={handleSubmit}
        isValid={isValid(form)}
      />
    </>
  );
};
