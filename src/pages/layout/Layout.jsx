import React from 'react';
import { Sidebar } from 'widgets/sidebar';

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">{children}</div>
    </>
  );
};

export default Layout;
