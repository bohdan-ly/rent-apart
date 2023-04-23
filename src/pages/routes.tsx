import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import { PATHS } from 'shared/navigation';

import DashboardPage from 'pages/dashboard';
import LoginPage from './auth';
import { AuthGuard } from 'entities/session/auth';

const lazyLoad = (loadedModule) =>
  React.lazy(() =>
    loadedModule().catch((err) => {
      console.log(err);

      if (err.message && /Loading chunk [\d]+ failed/.test(err.message)) {
        // return { default: ServerErrorPage };
        return { default: <div>500</div> };
      }
      return err;
    }),
  );

const RealtyDetailsPage = lazyLoad(() => import('./realty/details'));
const RealtyEditPage = lazyLoad(() => import('./realty/edit'));
const ExplorePage = lazyLoad(() => import('./realty/explore'));

const routesMap = [
  {
    path: PATHS.root,
    element: <Navigate to={PATHS.main.root} />,
  },
  {
    path: PATHS.main.root,
    element: (
      <AuthGuard>
        <DashboardPage />
      </AuthGuard>
    ),
  },
  {
    path: PATHS.realty.root,
    element: (
      <AuthGuard>
        <ExplorePage />
      </AuthGuard>
    ),
  },
  {
    path: PATHS.realty.details,
    element: (
      <AuthGuard>
        <RealtyDetailsPage />
      </AuthGuard>
    ),
  },
  {
    path: PATHS.realty.edit,
    element: (
      <AuthGuard>
        <RealtyEditPage />
      </AuthGuard>
    ),
  },
  {
    path: PATHS.auth.login,
    element: <LoginPage />,
  },
  {
    path: PATHS.error.accessDenied,
    // element: <AccessDeniedPage />,
    element: <div>401</div>,
  },
  {
    path: PATHS.error.serverError,
    // element: <ServerErrorPage />,
    element: <div>500</div>,
  },
];

export const Routes: React.FC = () => useRoutes(routesMap);
