import React from 'react';
import { ProfileAction } from './profile-action';
import classNames from 'classnames';
import { useOnClickOutside } from 'usehooks-ts';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/user/selector';
import { BASE_STATIC_API } from 'constants';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
  const navigate = useNavigate();

  const menuRef = React.useRef();
  const [opened, setOpened] = React.useState(false);
  const { user } = useSelector(selectUser);
  useOnClickOutside(menuRef, () => setOpened(false));

  const profileActions = [
    { title: 'Profile', disabled: true },
    { title: 'Settings', disabled: true },
    {
      title: 'Sign Out',
      action: () => {
        window.localStorage.clear();
        navigate('/login');
      },
    },
  ];

  return (
    <div ref={menuRef}>
      <button
        type="button"
        className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        id="user-menu-button"
        onClick={() => setOpened(!opened)}
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-8 h-8 rounded-full"
          src={`${BASE_STATIC_API}/img/users/${user.photo}`}
          alt="user photo"
        />
      </button>

      <div
        className={classNames(
          'z-50 fixed top-10 right-10 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow',
          {
            hidden: !opened,
          },
        )}
        id="user-dropdown"
      >
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900">{user.name}</span>
          <span className="block text-sm  text-gray-500 truncate">{user.email}</span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          {profileActions.map((a) => (
            <ProfileAction key={a.title} {...a} />
          ))}
        </ul>
      </div>
      <button
        data-collapse-toggle="mobile-menu-2"
        type="button"
        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="mobile-menu-2"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
};
