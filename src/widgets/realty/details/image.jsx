import React from 'react';

export const PreviewImage = ({ src }) => {
  return (
    <button
      type="button"
      className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
    >
      <img className="h-full w-full object-cover" src={src} alt="" />
    </button>
  );
};
