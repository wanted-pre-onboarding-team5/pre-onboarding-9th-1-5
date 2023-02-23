export const checkValid = ({ email, password }) => {
  if (!email || !email.match(/@/g)) return false;
  if (!password || password.length < 8) return false;
  return true;
};
