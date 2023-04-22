import React from 'react';

export const ProfileAction = ({ title = '' }) => {
  return (
    <li>
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        {title}
      </a>
    </li>
  );
};
