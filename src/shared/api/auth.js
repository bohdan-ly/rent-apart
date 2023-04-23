import { Api } from 'app/model/api';
// @ts-ignore
import { BASE_API } from 'constants';
import { ApiAbortController } from 'shared/utils/abort-controller';

export class ApiAuth {
  static async login({ email, password }) {
    try {
      const json = await Api.fetchRetry(`${BASE_API}/users/login`, {
        method: 'POST',
        signal: ApiAbortController.genController('login').signal,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      ApiAbortController.clearController('login');

      if (json.status !== 'success') {
        Api.handleErrorMessage(json);
      }
      window.localStorage.setItem('token', json.token);

      return { token: json.token };
    } catch (err) {
      console.error(err);
      return null;
    }
  }
  static async register({ name, email, password, passwordConfirm }) {
    try {
      const json = await Api.fetchRetry(`${BASE_API}/users/signup`, {
        method: 'POST',
        signal: ApiAbortController.genController('register').signal,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, passwordConfirm }),
      });

      ApiAbortController.clearController('register');

      if (!json.success) {
        Api.handleErrorMessage(json);
      }

      window.localStorage.setItem('token', json.token);

      return json;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
  static async logout() {
    try {
      const json = await Api.fetchRetry(`${BASE_API}/realty`, {
        signal: ApiAbortController.genController('logout').signal,
      });

      ApiAbortController.clearController('logout');

      if (json.status !== 'success') {
        Api.handleErrorMessage(json);
      }
      const { data } = json;
      return { realties: data.data };
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async getUser({ token = null }) {
    try {
      const json = await Api.fetchRetry(`${BASE_API}/users/me`, {
        signal: ApiAbortController.genController('getUser').signal,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      ApiAbortController.clearController('getUser');

      if (json.status !== 'success') {
        Api.handleErrorMessage(json);
      }

      const { data } = json;

      window.localStorage.setItem('user', JSON.stringify(data.data));

      return { user: data.data };
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}
