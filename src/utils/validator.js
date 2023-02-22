import { handleError } from './handleError';
import { message } from 'constants/message';

export default class validator {
  static #validate(condition, errorMsg) {
    if (condition) {
      return true;
    }

    return handleError(errorMsg);
  }

  static isValidEmail(value) {
    return this.#validate(this.hasEmailAtSign(value), message.error.invalidEmail);
  }

  static isValidPassword(value) {
    return this.#validate(this.hasPasswordMinimumLength(value), message.error.invalidPassword);
  }

  static hasEmailAtSign(value) {
    return value.includes('@');
  }

  static hasPasswordMinimumLength(value) {
    return value.length >= 8;
  }
}
