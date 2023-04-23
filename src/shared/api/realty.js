import { Api } from 'app/model/api';
// @ts-ignore
import { BASE_API } from 'constants';
import { ApiAbortController } from 'shared/utils/abort-controller';

export class ApiRealty {
  static async getRealties() {
    try {
      const json = await Api.fetchRetry(`${BASE_API}/realty`, {
        signal: ApiAbortController.genController('getRealties').signal,
      });

      ApiAbortController.clearController('getRealties');

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
  static async updateRealty(realtyData) {
    try {
      const json = await Api.fetchRetry(`${BASE_API}/realty/${realtyData.id}`, {
        method: 'PATCH',
        signal: ApiAbortController.genController('updateRealty').signal,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(realtyData),
      });

      ApiAbortController.clearController('updateRealty');

      if (json.status !== 'success') {
        Api.handleErrorMessage(json);
      }
      const { data } = json;
      return { realty: data.data };
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async createRealty(realtyData) {
    try {
      console.log(realtyData);
      const json = await Api.fetchRetry(`${BASE_API}/realty`, {
        method: 'POST',
        signal: ApiAbortController.genController('updateRealty').signal,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(realtyData),
      });

      ApiAbortController.clearController('updateRealty');

      if (json.status !== 'success') {
        Api.handleErrorMessage(json);
      }
      const { data } = json;
      return { realty: data.data };
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async uploadImage(image) {
    try {
      const json = await Api.fetchRetry(`${BASE_API}/realty/upload-image`, {
        method: 'POST',
        signal: ApiAbortController.genController('uploadImage').signal,
        // headers: {
        //   'Content-Type': 'multipart/form-data',
        //   enctype: 'multipart/form-data',
        // },
        body: image,
      });

      ApiAbortController.clearController('uploadImage');

      if (json.status !== 'success') {
        Api.handleErrorMessage(json);
      }
      const { data } = json;
      return { ...data };
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}
