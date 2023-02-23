export const validateAccount = (email, password) => {
  const emailReg = /@/;
  if (!email || !emailReg.test(email)) return false;
  if (!password || password.length < 8) return false;
  return true;
};
