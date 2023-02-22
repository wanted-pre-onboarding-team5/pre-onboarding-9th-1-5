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
