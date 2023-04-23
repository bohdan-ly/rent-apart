import React from 'react';

export const Tenant = ({ src, name, email, lastPayedAt, sum, percentilesLeft }) => {
  return (
    <li className="pb-3 sm:pb-4">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img className="w-8 h-8 rounded-full" src={src} alt="Neil image" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">{name}</p>
          <p className="text-sm text-gray-500 truncate">{email}</p>
        </div>
        {(sum === 0 || !!sum) && (
          <div className="inline-flex items-center text-base font-semibold text-gray-900">
            ${sum}
          </div>
        )}
      </div>
    </li>
  );
};
