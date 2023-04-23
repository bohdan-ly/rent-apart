import { ChevronDownIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import React from 'react';
import { useOnClickOutside } from 'usehooks-ts';

export const Dropdown = ({ title, options = [], buttonClassName, onSelect = () => {} }) => {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef();

  useOnClickOutside(ref, () => setOpen(false));

  return (
    <div ref={ref} className="relative w-full">
      <button
        id="dropdownDefaultButton"
        className={classNames(
          'text-black bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2.5 text-center inline-flex items-center',
          buttonClassName,
          {
            'rounded-lg': !buttonClassName,
          },
        )}
        type="button"
        onClick={() => setOpen(!open)}
      >
        <span className="w-full text-left">{title || 'Dropdown button'}</span>
        <ChevronDownIcon className={classNames('w-5 h-5 transition-all', { 'rotate-180': open })} />
      </button>
      <div
        id="dropdown"
        className={classNames(
          'z-10 translate-y-2 left-0 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-full',
          {
            hidden: !open,
          },
        )}
      >
        <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
          {options.map((o, idx) => (
            <li key={o.title || idx}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  onSelect(o);
                }}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                {o.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
