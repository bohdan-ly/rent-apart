import React from 'react';

export const SidebarButton = ({ title = 'Dashboard', icon = null }) => {
  return (
    <li>
      <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
        <div className="h-5 w-5">{icon}</div>
        <span className="ml-3">{title}</span>
      </a>
    </li>
  );
};
