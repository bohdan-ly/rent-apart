import Layout from 'pages/layout/Layout';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { PATHS } from 'shared/navigation';
import { selectUser } from 'store/user/selector';

export const AuthGuard = ({ children, redirect = PATHS.auth.login }) => {
  const { user } = useSelector(selectUser);
  return <Layout>{children}</Layout>;
  // return user ? <Layout>{children}</Layout> : <Navigate to={redirect} />;
};
