import { useForm } from 'hooks/useForm';
import { AuthForm } from 'components/AuthForm';

export const SignUp = () => {
  const { formInputs, handleChange, handleSubmit, isValid } = useForm('signup');

  return (
    <AuthForm
      type='signup'
      formInputs={formInputs}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      isValid={isValid}
    />
  );
};
