let navigateFunc = null;

export const setNavigate = (navigate) => void (navigateFunc = navigate);

export const navigateTo = (path) => void (navigateFunc && navigateFunc(path));

export const PATHS = {
  root: '/',
  main: {
    root: '/home',
  },
  categories: {
    root: '/categories',
    category: '/categories/:categoryId',
    project: '/categories/:categoryId/:projectId',
  },
  profile: {
    root: '/profile',
    user: '/profile/:userId',
  },
  explore: {
    root: '/explore',
  },
  error: {
    root: '/error',
    accessDenied: '/error/401',
    serverError: '/error/500',
  },
};
