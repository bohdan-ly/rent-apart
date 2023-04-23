let navigateFunc = null;

export const setNavigate = (navigate) => void (navigateFunc = navigate);

export const navigateTo = (path) => void (navigateFunc && navigateFunc(path));

export const PATHS = {
  root: '/',
  main: {
    root: '/dashboard',
  },
  realty: {
    root: '/realty',
    details: '/realty/:slug',
    edit: 'edit/realty/:slug?',
  },
  profile: {
    root: '/profile',
    user: '/profile/:userId',
  },
  explore: {
    root: '/explore',
  },
  auth: {
    login: '/login',
  },
  error: {
    root: '/error',
    accessDenied: '/error/401',
    serverError: '/error/500',
  },
};
