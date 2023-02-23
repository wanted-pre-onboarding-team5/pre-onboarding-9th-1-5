import { deepFreeze } from 'utils/deepFreeze';

export const API_END_POINT = process.env.REACT_APP_API_URL;
export const USER_TOKEN_KEY = 'userToken';

export const MESSAGE = deepFreeze({
  process: {
    signOut: '로그아웃 되었습니다.',
    createTodo: '할 일이 추가되었습니다.',
    deleteTodo: '할 일이 삭제되었습니다.',
    updateTodo: '할 일이 수정되었습니다.',
  },
  error: {
    emptyTodo: '할 일을 입력해주세요.',
    notStringTodo: '할 일은 문자열만 입력할 수 있습니다.',
  },
});

export const PROPERTY = {
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
  },
  button: {
    addTodo: {
      text: '추가',
      testId: 'new-todo-add-button',
    },
    editMode: {
      text: '수정',
      testId: 'modify-button',
    },
    deleteTodo: {
      text: '삭제',
      testId: 'delete-button',
    },
    editConfirm: {
      text: '제출',
      testId: 'submit-button',
    },
    editCancel: {
      text: '취소',
      testId: 'cancel-button',
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
    },
  },
  checkbox: {
    isCompleted: {
      type: 'checkbox',
    },
  },
  display: {
    show: 'flex',
    hide: 'none',
    isCompleted: 'line-through',
    notCompleted: 'none',
  },
};
