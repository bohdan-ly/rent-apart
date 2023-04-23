import { UsersIcon } from '@heroicons/react/24/outline';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Tag } from 'shared/ui';
import { Avatars } from 'shared/ui/avatars';

const About = ({ description, summary, price }) => {
  return (
    <div className="md:col-span-3 md:row-span-2 md:row-end-2">
      <h5 className="text-lg text-gray-900 hover:border-gray-400 hover:text-gray-800 font-semibold">
        Description
      </h5>
      <div className="mt-3 flex select-none flex-wrap items-center gap-2">
        <Tag tag={'Demo'} />
        <Tag tag={'Whole Bean'} />
        <Tag tag={'Groud'} />
      </div>

      {!!(description || summary) && (
        <div className="flex items-center">
          <p className="mt-6">{description || summary}</p>
        </div>
      )}

      <div className="flex flex-col items-center justify-between space-y-4 py-4 sm:flex-row sm:space-y-0">
        <div className="flex items-end justify-between w-full">
          {price > 0 && <h1 className="text-xl font-bold">${price}</h1>}
          <div className="flex items-center">
            <div className="flex items-center mr-4">
              <UserCircleIcon className="h-6 w-6" />
              <span>{300}</span>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
