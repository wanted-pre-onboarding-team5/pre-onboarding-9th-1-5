import Button from 'components/public/Button';
import Input from 'components/public/Input';
import TextLink from 'components/public/TextLink';
import { useJoinData } from 'hooks/useJoinData';
import { PROPERTY } from 'constants';

export const SignUp = () => {
  const {
    onChangeEmail,
    onChangePassword,
    userData,
    handleSignUp,
    handleActiveButton,
    activeButton,
  } = useJoinData();

  return (
    <form>
      <div>{PROPERTY.title.signUp}</div>
      <Input
        props={{
          ...PROPERTY.input.signUpEmail,
          onChange: onChangeEmail,
        }}
      />
      <Input
        props={{
          ...PROPERTY.input.signUpPassword,
          onChange: onChangePassword,
        }}
      />
      <Button
        props={{
          ...PROPERTY.button.signUpConfirm,
          handleClick: handleSignUp,
          handleActive: handleActiveButton,
          active: activeButton,
          userData,
        }}
      />
      <TextLink
        props={{
          ...PROPERTY.textLink.goSignIn,
        }}
      />
    </form>
  );
};
