import { BASE_STATIC_API } from 'constants';
import React from 'react';
import { SunIcon } from '@heroicons/react/24/outline';
import { Cars } from 'shared/icons';
import { useNavigate } from 'react-router-dom';

export const RealtyCard = ({ name, slug, summary, imageCover }) => {
  const navigate = useNavigate();

  return (
    <a
      href="/"
      onClick={(e) => {
        e.preventDefault();
        navigate(`/realty/${slug}`);
      }}
      className="block rounded-lg p-4 shadow-sm shadow-indigo-100 cursor-pointer group hover:scale-[1.01] hover:shadow-gray-300 transition-all"
    >
      <img
        alt="Home"
        // src={`${BASE_STATIC_API}/img/tours/${imageCover || 'tour-1-1.jpg'}`}
        src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className="h-26 w-full rounded-md object-cover"
      />

      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">Name</dt>
            <dd className="font-medium">{name}</dd>
          </div>
          <div>
            <dt className="sr-only">Summary</dt>

            <dd className="text-xs text-gray-500">{summary}</dd>
          </div>
        </dl>
      </div>
    </a>
  );
};
