import { message } from 'constants/message';

export const handleError = (error) => {
  try {
    if (error.response?.data?.message) throw new Error(error.response?.data?.message);
    if (typeof error === 'string') throw new Error(error);
    throw new Error(message.process.fail);
  } catch (error) {
    alert(error.message);
    return false;
  }
};
