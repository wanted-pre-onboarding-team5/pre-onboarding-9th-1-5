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
    return this.isExistTodo(todo) && this.isStringTodo(todo);
  }

  static isExistTodo(todo) {
    return this.#validate(this.isSet(todo), MESSAGE.error.emptyTodo);
  }

  static isStringTodo(todo) {
    return this.#validate(this.isString(todo), MESSAGE.error.notStringTodo);
  }

  static isSet(value) {
    return value.trim().length > 0;
  }

  static isString(value) {
    return typeof value === 'string';
  }
}
