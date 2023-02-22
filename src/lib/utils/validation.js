export const isValid = (form) => {
  return form['email-input'].match('@') && form['password-input'].length >= 8;
};
