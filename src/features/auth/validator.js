const validator = {
  checkEmail: (email) => {
    return new RegExp(/^[\w.!#$%&'*+/=?^`{|}~-]+@[\w.!#$%&'*+/=?^`{|}~-]+$/).test(email);
  },
  checkPassword: (password) => {
    return password.length < 8 ? false : true;
  },
};

export default validator;
