import React from 'react';
import { Popover } from 'shared/ui/popover';
import { Sidebar } from 'widgets/sidebar';

const Layout = ({ children }) => {
  return (
    <>
      <Popover />
      <Sidebar />
      <div className="p-4 sm:ml-64">{children}</div>
    </>
  );
};

export default Layout;
