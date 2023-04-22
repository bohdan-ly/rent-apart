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
      console.log(json);

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
  static async getRecipeById(recipeId) {
    try {
      const json = await Api.fetchRetry(`${BASE_API}/lookup.php?i=${recipeId}`, {
        signal: ApiAbortController.genController('getRecipeById').signal,
      });

      ApiAbortController.clearController('getRecipeById');

      if (!json.success) {
        Api.handleErrorMessage(json);
      }

      return json;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}
