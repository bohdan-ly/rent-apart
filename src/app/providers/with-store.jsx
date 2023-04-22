import { Provider } from 'react-redux';
import { store } from '../model';

export const withStore = (component) =>
  function WithStore() {
    return <Provider store={store}>{component()}</Provider>;
  };
