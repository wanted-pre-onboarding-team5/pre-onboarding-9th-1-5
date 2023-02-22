import React, { Fragment, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Todo = () => {
  const navigate = useNavigate();

  // 로컬 스토리지 토큰 확인
  const is_token = localStorage.getItem('access_token') ? true : false;

  // 비로그인 상태이면 signin 화면으로
  useEffect(() => {
    if (!is_token) navigate('/signin');
  }, [is_token, navigate]);

  // 로컬스토리지의 엑세스토큰을 삭제함으로써 로그아웃 구현
  const logout = () => {
    localStorage.removeItem('access_token');
    navigate('/signin');
  };

  return (
    <Fragment>
      <div>
        <div>
          <div>TodoList</div>
          <div onClick={logout}>logout</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Todo;
