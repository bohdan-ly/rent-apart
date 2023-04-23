import React from 'react';

export const Gallery = () => {
  return (
    <div className="md:col-span-2 md:row-end-1">
      <div className="lg:flex lg:items-start lg:flex-col mt-1.5">
        <div className="">
          <div className="max-w-sm overflow-hidden rounded-lg">
            <img
              className="h-full w-full max-w-full object-cover"
              src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
            />
          </div>
        </div>

        <div className="mt-2 w-full lg:flex-shrink-0">
          <div className="flex flex-row items-start gap-4">
            <button
              type="button"
              className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center"
            >
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
              />
            </button>
            <button
              type="button"
              className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
            >
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
              />
            </button>
            <button
              type="button"
              className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
            >
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
              />
            </button>
            <button
              type="button"
              className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
            >
              <div className="flex items-center justify-center rounded bg-gray-50 h-full cursor-pointer hover:border">
                <p className="text-2xl text-gray-400">+</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
