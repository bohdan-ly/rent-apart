import React from 'react';
import { BrowserRouter, useNavigate } from 'react-router-dom';

import { setNavigate } from 'shared/navigation';

const NavigationSetter = () => {
  const navigate = useNavigate();
  React.useEffect(() => setNavigate(navigate), [navigate]);
  return <></>;
};

export const withRouter = (component) =>
  function WithRouter() {
    return (
      <BrowserRouter basename="/">
        {component()}
        <NavigationSetter />
      </BrowserRouter>
    );
  };
