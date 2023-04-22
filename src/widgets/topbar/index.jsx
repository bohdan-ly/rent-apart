import React from 'react';
import { BellIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import { Profile } from './profile';
import { useScroll } from '@react-hooks-library/core';
import classNames from 'classnames';

export const TopBar = () => {
  const [transparent, setTransparent] = React.useState(true);

  //   useScroll(window.document.body, ({ scrollY }) => {
  //     if (0.05 < scrollY && transparent) {
  //       console.log(scrollY);
  //       setTransparent(false);
  //     }

  //     if (0.05 > scrollY && !transparent) {
  //       setTransparent(false);
  //     }
  //   });

  return (
    <nav className={classNames('border-gray-200 bg-white')}>
      <div className="flex flex-wrap items-center justify-end mx-auto p-4 px-10 gap-4">
        <div className="flex items-center md:order-2">
          <Profile />
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 gap-4"
          id="mobile-menu-2"
        >
          <ChatBubbleLeftRightIcon className="w-6 h-6 cursor-pointer" />
          <BellIcon className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};
