import React from 'react';

export const Select = ({
  className = 'sm:col-span-3',
  label = 'Country',
  name = 'country',
  autoComplete = 'country-name',
  value = '',
  options = [],
  onSelect = () => {},
}) => {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900 capitalize"
      >
        {label}
      </label>
      <div className="mt-2">
        <select
          id={name}
          name={name}
          autoComplete={autoComplete}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          value={value}
        >
          {options.map((o, idx) => (
            <option key={o.value || idx} value={o.value} onSelect={() => onSelect(0)}>
              United States
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
