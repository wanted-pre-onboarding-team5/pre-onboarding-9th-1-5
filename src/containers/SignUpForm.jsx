import { AuthForm } from 'components';
import { useState, useCallback } from 'react';
import { signUp } from 'lib/api/auth';
import { useNavigate } from 'react-router-dom';
import { isValid } from 'lib/utils/validation';

export const SignUpForm = () => {
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
        await signUp({
          email: form['email-input'],
          password: form['password-input'],
        });
        navigate('/signin');
      } catch (e) {
        setError(e.response.data.message);
      }
    },
    [form, navigate],
  );

  return (
    <>
      <AuthForm
        type='signup'
        form={form}
        error={error}
        onChange={handleChange}
        onSubmit={handleSubmit}
        isValid={isValid(form)}
      />
    </>
  );
};
