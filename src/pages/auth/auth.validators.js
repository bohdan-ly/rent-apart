import { EMAIL_REGEX, PWD_REGEX, USERNAME_REGEX } from './auth.constants.js';

export const isEmailValid = (value) => {
  return EMAIL_REGEX.test(value);
};

export const isPasswordValid = (value) => {
  return PWD_REGEX.test(value);
};

export const isUsernameValid = (value) => {
  return USERNAME_REGEX.test(value);
};