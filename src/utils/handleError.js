import { MESSAGE } from 'constants';

export const handleError = (error) => {
  try {
    if (error.response?.data?.message) throw new Error(error.response?.data?.message);
    if (typeof error === 'string') throw new Error(error);
    throw new Error(MESSAGE.process.fail);
  } catch (error) {
    alert(error.message);
    return false;
  }
};
