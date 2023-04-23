import { ClockIcon } from '@heroicons/react/24/outline';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Tag } from 'shared/ui';
import { Avatars } from 'shared/ui/avatars';

export const Info = ({ curFilter, count = 300 }) => {
  const getTitle = () => {
    switch (curFilter.value) {
      case 'all':
        return 'Payment is expected';
      default:
        return 'Payment received';
    }
  };

  return (
    <div className="w-full flex items-center mt-8 justify-between">
      <div className="text-nowrap font-medium">{getTitle()}</div>
      <div className="flex items-center">
        <div className="flex items-center mr-6">
          <UserCircleIcon className="h-6 w-6" />
          <span>{count}</span>
        </div>
        <Avatars
          size={6}
          items={[
            {
              src: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
              src: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
              src: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
              src: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
          ]}
        />
        {curFilter.value === 'paid' && (
          <div className="ml-8">
            <Tag
              className={
                'bg-gray-200 border-none rounded-lg border border-black px-2.5 py-1 text-xs'
              }
              tag={
                <div className="flex items-center">
                  <ClockIcon className="h-4 w-4 mr-2" /> <span>12 days left</span>
                </div>
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};
