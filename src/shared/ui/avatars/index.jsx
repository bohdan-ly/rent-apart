import React from 'react';

export const Avatars = ({ size = 8, items = [] }) => {
  return (
    <div className="flex -space-x-2 overflow-hidden">
      {items.map((i, idx) => (
        <img
          key={i.src || idx}
          className={`inline-block h-${size} w-${size} rounded-full ring-2 ring-white`}
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      ))}
    </div>
  );
};
