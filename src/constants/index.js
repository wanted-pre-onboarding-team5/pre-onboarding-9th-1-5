import { deepFreeze } from 'utils/deepFreeze';

export const API_END_POINT = process.env.REACT_APP_API_URL;
export const USER_TOKEN_KEY = 'userToken';

export const MESSAGE = deepFreeze({
  process: {
    signOut: '로그아웃 되었습니다.',
    create: '할 일이 추가되었습니다.',
    delete: '할 일이 삭제되었습니다.',
    update: '할 일이 수정되었습니다.',
  },
  error: {
    emptyTodo: '할 일을 입력해주세요.',
    notStringTodo: '할 일은 문자열만 입력할 수 있습니다.',
  },
});

export const PROPERTY = {
  newTodoInput: {
    testId: 'new-todo-input',
    type: 'text',
    placeholder: '할 일을 적어주세요.',
  },
  newTodoAddButton: {
    text: '추가',
    testId: 'new-todo-add-button',
  },
  isCompleted: {
    type: 'checkbox',
  },
  modifyModeButton: {
    text: '수정',
    testId: 'modify-button',
  },
  deleteButton: {
    text: '삭제',
    testId: 'delete-button',
  },
  modifyTodoInput: {
    testId: 'modify-input',
    type: 'text',
    placeholder: '수정할 내용을 적어주세요.',
  },
  modifyConfirmButton: {
    text: '제출',
    testId: 'submit-button',
  },
  modifyCancelButton: {
    text: '취소',
    testId: 'cancel-button',
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
  },
  signUpButton: {
    text: '회원가입',
    testId: 'signup-button',
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
  },
  signInButton: {
    text: '로그인하기',
    testId: 'signin-button',
  },
  signOutButton: {
    text: '로그아웃',
  },
  display: {
    show: 'flex',
    hide: 'none',
    isCompleted: 'line-through',
    notCompleted: 'none',
  }
};