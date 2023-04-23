import React from 'react';

export const Input = ({
  label = 'Input',
  onChange = () => {},
  value = '',
  placeholder = 'input',
  type = 'text',
  name = 'first-name',
  autoComplete = 'given-name',
  className = 'sm:col-span-3',
  inputClassName = 'mt-2',
}) => {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900 capitalize"
      >
        {label}
      </label>
      <div className={inputClassName}>
        <input
          type={type}
          name={name}
          id={name}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};
