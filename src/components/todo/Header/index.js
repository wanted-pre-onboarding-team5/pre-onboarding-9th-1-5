import { postSignOut } from 'apis/loginApi';
import Button from 'components/public/Button';
import { PATH } from 'constants';
import { PROPERTY } from 'constants';
import { MESSAGE } from 'constants';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigator = useNavigate();
  const onLogout = () => {
    postSignOut();
    navigator(PATH.home);
    alert(MESSAGE.process.signOut);
  };

  return (
    <div>
      <h1>{PROPERTY.title.todo}</h1>
      <Button props={{ ...PROPERTY.button.signOutConfirm, handleClick: onLogout }} />
    </div>
  );
};

export default Header;
