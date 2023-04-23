import React from 'react';
import { PROLabel } from 'shared/ui/pro';

export const ProfileAction = ({ title = '', disabled, action = () => {} }) => {
  return (
    <li>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();

          if (disabled) action();
        }}
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 relative"
      >
        {title}
        {disabled && <PROLabel className="right-1 top-1" />}
      </a>
    </li>
  );
};
