import originalFetch from 'isomorphic-fetch';
import fetchBuilder from 'fetch-retry';
import { notify } from 'app/providers/with-notifications';
import { ApiAuth, ApiRealty } from 'shared/api';

export class Api {
  static Realty = ApiRealty;
  static Auth = ApiAuth;

  static handleErrorMessage(obj) {
    if (!obj.message && !obj.msg) return;
    if (obj.code === 4003) return;

    notify({
      message: obj.msg || obj.message || '',
      type: obj.code || '10000',
    });
  }

  static async fetchRetry(path, props) {
    try {
      const options = {
        retries: 3,
        retryDelay: 3000,
      };

      const token = window.localStorage.getItem('token');

      const fetchOptions = {
        ...props,
        headers: { ...(props.headers || {}) },
      };

      if (token) {
        fetchOptions.headers.Authorization = `Bearer ${token}`;
      }

      const fetch = fetchBuilder(originalFetch, options);
      const data = await fetch(path, fetchOptions);
      const json = await data.json();
      return json;
    } catch (err) {
      console.error(err, path, props);
      return null;
    }
  }
}
