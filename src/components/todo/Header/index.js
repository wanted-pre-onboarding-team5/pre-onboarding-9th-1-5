import { postSignOut } from 'apis/loginApi';
import { MESSAGE } from 'constants';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigator = useNavigate();
  const onLogout = () => {
    postSignOut();
    navigator('/');
    alert(MESSAGE.process.signOut);
  };

  return (
    <div>
      <h1>To Do List</h1>
      <button onClick={onLogout}>로그아웃</button>
    </div>
  );
};

export default Header;
