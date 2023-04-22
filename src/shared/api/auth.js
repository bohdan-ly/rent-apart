import { Api } from 'app/model/api.js';

import { BASE_API } from '../../constants.js';
import { ApiAbortController } from '../utils/abort-controller.js';

export class ApiAuth {
  static async signUp({ email, name, password, passwordConfirm }) {
    if (password !== passwordConfirm) {
      return null;
    }

    console.log(JSON.stringify({ email, name, password, passwordConfirm }));

    try {
      const json = await Api.fetchRetry(`${BASE_API}/users/signup`, {
        signal: ApiAbortController.genController('register').signal,
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ email, name, password, passwordConfirm }),
      });

      ApiAbortController.clearController('register');

      if (json.status !== 'success') {
        Api.handleErrorMessage(json);
      }
      const { data } = json;

      localStorage.setItem('token', data.token);

      return { user: data.user };
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}