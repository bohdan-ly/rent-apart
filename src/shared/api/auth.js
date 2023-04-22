import { Api } from 'app/model/api.js';

import { BASE_API } from '../../constants.js';
import { ApiAbortController } from '../utils/abort-controller.js';

export class ApiAuth {
  static async signUp({ email, name, password, passwordConfirm }) {
    if (password !== passwordConfirm) {
      return null;
    }

    try {
      const json = await Api.fetchRetry(`${BASE_API}/users/signup`, {
        signal: ApiAbortController.genController('signUp').signal,
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ email, name, password, passwordConfirm }),
      });

      ApiAbortController.clearController('signUp');

      if (json.status !== 'success') {
        Api.handleErrorMessage(json);
      }
      const { data } = json;

      return { user: data.user, token: data.token };
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async login({ email, password }) {
    try {
      const json = await Api.fetchRetry(`${BASE_API}/users/login`, {
        signal: ApiAbortController.genController('login').signal,
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });

      ApiAbortController.clearController('login');

      if (json.status !== 'success') {
        Api.handleErrorMessage(json);
      }
      const { data } = json;

      return { token: data.token };
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}