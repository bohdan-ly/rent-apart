import { BASE_STATIC_API } from 'constants';
import React from 'react';
import { SunIcon } from '@heroicons/react/24/outline';
import { Cars } from 'shared/icons';
import { useNavigate } from 'react-router-dom';

export const RealtyCard = ({ name, slug, summary, imageCover, price, area = 0, rooms = 1 }) => {
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
        className="h-56 w-full rounded-md object-cover"
      />

      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">Name</dt>
            <dd className="font-medium">{name}</dd>
          </div>
          <div>
            <dt className="sr-only">Address</dt>

            <dd className="text-xs text-gray-500">123 Wallaby Avenue, Park Road</dd>
          </div>
          <div className="mt-1">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="sr-only">Price</span>
              <div className="text-sm text-gray-600">${price}</div>
              <div className="h-[2px] w-[2px] bg-gray-600 rounded-full" />
              <span className="sr-only">Area</span>
              <div className="text-sm text-gray-600">{area}m²</div>
            </div>
          </div>
        </dl>

        <div className="mt-6 flex items-center gap-8 text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <Cars className="h-5 w-5 fill-indigo-700" />

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Parking</p>

              <p className="font-medium">2 spaces</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <SunIcon className="h-5 w-5 text-yellow-400" />

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Rooms</p>

              <p className="font-medium">{rooms} rooms</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
