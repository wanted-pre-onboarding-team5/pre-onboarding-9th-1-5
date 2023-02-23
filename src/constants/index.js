import { deepFreeze } from 'utils/deepFreeze';

export const API_END_POINT = process.env.REACT_APP_API_URL;
export const USER_TOKEN_KEY = 'userToken';

export const PATH = Object.freeze({
  home: '/',
  login: '/signin',
  join: '/signup',
  todo: '/todo',
});

export const API_PATH = Object.freeze({
  home: '/',
  login: '/signin',
  join: '/signup',
  todos: '/todos',
  auth: '/auth',
});

export const MESSAGE = deepFreeze({
  process: {
    success: '성공적으로 처리되었습니다.',
    fail: '처리에 실패하였습니다.',
    signUp: '회원가입이 완료되었습니다.',
    signOut: '로그아웃 되었습니다.',
    createTodo: '할 일이 추가되었습니다.',
    deleteTodo: '할 일이 삭제되었습니다.',
    updateTodo: '할 일이 수정되었습니다.',
    askDelete: '정말 삭제하시겠습니까?',
  },
  error: {
    invalidEmail: '올바르지 않은 이메일 형식입니다.',
    invalidPassword: '올바르지 않은 비밀번호 형식입니다.',
    emptyTodo: '할 일을 입력해주세요.',
    notChangeTodo: '이전 할 일과 동일한 값입니다.',
    notStringTodo: '할 일은 문자열만 입력할 수 있습니다.',
    occurError: '에러가 발생했습니다.',
  },
});

export const PROPERTY = deepFreeze({
  title: {
    signIn: "TODAY'S TO DO",
    signUp: '회원가입',
    todo: 'To Do List',
  },
  input: {
    addTodo: {
      testId: 'new-todo-input',
      type: 'text',
      placeholder: '할 일을 적어주세요.',
    },
    editTodo: {
      testId: 'modify-input',
      type: 'text',
      placeholder: '수정할 내용을 적어주세요.',
    },
    signUpEmail: {
      testId: 'email-input',
      type: 'email',
      placeholder: '이메일',
    },
    signUpPassword: {
      testId: 'password-input',
      type: 'password',
      placeholder: '비밀번호',
      autoComplete: 'off',
    },
    signInEmail: {
      testId: 'email-input',
      type: 'email',
      placeholder: '아이디 또는 이메일',
    },
    signInPassword: {
      testId: 'password-input',
      type: 'password',
      placeholder: '비밀번호',
      autoComplete: 'off',
    },
  },
  button: {
    addTodo: {
      text: '추가',
      testId: 'new-todo-add-button',
      active: true,
    },
    editMode: {
      text: '수정',
      testId: 'modify-button',
      active: true,
    },
    deleteTodo: {
      text: '삭제',
      testId: 'delete-button',
      active: true,
    },
    editConfirm: {
      text: '제출',
      testId: 'submit-button',
      active: true,
    },
    editCancel: {
      text: '취소',
      testId: 'cancel-button',
      active: true,
    },
    signUpConfirm: {
      text: '회원가입',
      testId: 'signup-button',
    },
    signInConfirm: {
      text: '로그인하기',
      testId: 'signin-button',
    },
    signOutConfirm: {
      text: '로그아웃',
      active: true,
    },
    goTodo: {
      text: '할 일 보러 가기',
      active: true,
    },
    goLogin: {
      text: '로그인하러 가기',
      active: true,
    },
    goJoin: {
      text: '회원가입하러 가기',
      active: true,
    },
    goBack: {
      text: '이전 페이지로 가기',
      active: true,
    },
  },
  checkbox: {
    isCompleted: {
      type: 'checkbox',
    },
  },
  textLink: {
    goSignIn: {
      text: '이미 회원이신가요? 로그인',
      link: '/signin',
    },
    goSignUp: {
      text: '아직 회원이 아니신가요? 회원가입',
      link: '/signup',
    },
  },
  display: {
    show: 'flex',
    hide: 'none',
    isCompleted: {
      true: 'line-through',
      false: 'none',
    },
  },
});
