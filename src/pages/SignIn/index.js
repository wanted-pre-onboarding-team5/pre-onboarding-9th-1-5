import { useForm } from 'hooks/useForm';
import { AuthForm } from 'components/AuthForm';

export const SignIn = () => {
  const { formInputs, handleChange, handleSubmit, isValid } = useForm('signin');

  return (
    <AuthForm
      type='signin'
      formInputs={formInputs}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      isValid={isValid}
    />
  );
};
