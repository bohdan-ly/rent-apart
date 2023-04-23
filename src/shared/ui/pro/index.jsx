import classNames from 'classnames';
import React from 'react';

export const PROLabel = ({ className }) => {
  return (
    <span
      className={classNames(
        'absolute bg-lime-100 text-lime-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded',
        className,
      )}
    >
      PRO
    </span>
  );
};
