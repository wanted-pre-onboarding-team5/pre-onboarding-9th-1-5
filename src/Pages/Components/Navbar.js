/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const logout = () => {
    localStorage.removeItem('JWT');
    window.location.replace('/signin');
  };

  return (
    <div>
      <nav>
        <div>
          <Link to='/'>홈</Link>
          <ul>
            <li>
              <Link to='/signin'>로그인</Link>
            </li>
            <li>
              <Link to='/signup'>회원가입</Link>
            </li>
            <li>
              <Link to='/todo'>TODO</Link>
            </li>
            <li>
              <Link onClick={logout} to='/signin'>
                로그아웃
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
