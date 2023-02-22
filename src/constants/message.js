import { deepFreeze } from 'utils/deepFreeze';

export const message = deepFreeze({
  process: {
    success: '성공적으로 처리되었습니다.',
    fail: '처리에 실패하였습니다.',
  },
  error: {
    invalidEmail: '올바르지 않은 이메일 형식입니다.',
    invalidPassword: '올바르지 않은 비밀번호 형식입니다.',
  },
});
