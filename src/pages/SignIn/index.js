import Button from 'components/public/Button';
import Input from 'components/public/Input';
import TextLink from 'components/public/TextLink';
import { useLoginData } from 'hooks/useLoginData';
import { PROPERTY } from 'constants';

export const SignIn = () => {
  const {
    onChangeEmail,
    onChangePassword,
    userData,
    handleSignIn,
    handleActiveButton,
    activeButton,
  } = useLoginData();

  return (
    <form>
      <div>{PROPERTY.title.signIn}</div>
      <Input
        props={{
          ...PROPERTY.input.signInEmail,
          onChange: onChangeEmail,
        }}
      />
      <Input
        props={{
          ...PROPERTY.input.signInPassword,
          onChange: onChangePassword,
        }}
      />
      <Button
        props={{
          ...PROPERTY.button.signInConfirm,
          handleClick: handleSignIn,
          handleActive: handleActiveButton,
          active: activeButton,
          userData,
        }}
      />
      <TextLink
        props={{
          ...PROPERTY.textLink.goSignUp,
        }}
      />
    </form>
  );
};
