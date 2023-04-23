import { BASE_STATIC_API } from 'constants';
import React from 'react';
import { PreviewImage } from './image';

export const Gallery = ({ imageCover, images }) => {
  return (
    <div className="md:col-span-2 md:row-end-1">
      <div className="lg:flex lg:items-start lg:flex-col mt-1.5">
        <div className="">
          <div className="max-w-sm overflow-hidden rounded-lg">
            <img
              className="h-full w-full max-w-full object-cover"
              src={`${BASE_STATIC_API}/img/realty/${imageCover}`}
              alt="cover"
            />
          </div>
        </div>

        <div className="mt-2 w-full lg:flex-shrink-0">
          <div className="flex flex-row items-start gap-4 flex-wrap">
            {images?.map((image) => (
              <PreviewImage key={image} src={`${BASE_STATIC_API}/img/realty/${image}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
