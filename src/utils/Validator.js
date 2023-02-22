import { MESSAGE } from 'constants';
import { handleError } from './handleError';

export default function Validator() {
  this.validate = (condition, errorMsg) => {
    if (condition) {
      return true;
    }

    return handleError(errorMsg);
  };

  this.isValidTodo = function (todo) {
    return this.isExistTodo(todo) && this.isStringTodo(todo);
  };

  this.isExistTodo = function (todo) {
    return this.validate(this.isSet(todo), MESSAGE.error.emptyTodo);
  };

  this.isStringTodo = function (todo) {
    return this.validate(this.isString(todo), MESSAGE.error.notStringTodo);
  };

  this.isSet = function (value) {
    return value.trim().length > 0;
  };

  this.isString = function (value) {
    return typeof value === 'string';
  };
}
