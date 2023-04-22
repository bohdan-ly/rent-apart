import compose from 'compose-function';

import { withFallback } from './with-fallback';
import { withNotifications } from './with-notifications';
import { withRouter } from './withRouter';
import { withStore } from './with-store';

export const withProviders = compose(withRouter, withNotifications, withFallback, withStore);
