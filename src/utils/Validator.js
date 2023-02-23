import { MESSAGE } from 'constants';
import { handleError } from './handleError';

export default class validator {
  static #validate(condition, errorMsg) {
    if (condition) {
      return true;
    }

    return handleError(errorMsg);
  }

  static isValidTodo(todo) {
    return this.#isExistTodo(todo) && this.#isStringTodo(todo);
  }

  static isValidEmail(email) {
    return this.#hasAtSignEmail(email);
  }

  static isValidPassword(password) {
    return this.#isMinimumLengthPassword(password);
  }

  static isChangeTodo(modifyTodo, todo) {
    return this.#validate(!this.#isSame([modifyTodo, todo]), MESSAGE.error.notChangeTodo);
  }

  static #isExistTodo(todo) {
    return this.#validate(this.#isSet(todo), MESSAGE.error.emptyTodo);
  }

  static #isStringTodo(todo) {
    return this.#validate(this.#isString(todo), MESSAGE.error.notStringTodo);
  }

  static #hasAtSignEmail(email) {
    return this.#validate(this.hasAtSign(email), MESSAGE.error.invalidEmail);
  }

  static #isMinimumLengthPassword(password) {
    return this.#validate(this.isMinimumLength(password), MESSAGE.error.invalidPassword);
  }

  static #isSet(value) {
    return value.trim().length > 0;
  }

  static #isString(value) {
    return typeof value === 'string';
  }

  static #isSame(array) {
    const lastValue = array.pop();
    return array.every((value) => lastValue === value);
  }

  static hasAtSign(value) {
    return value.includes('@');
  }

  static isMinimumLength(value) {
    return value.length >= 8;
  }
}
