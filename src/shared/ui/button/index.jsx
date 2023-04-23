import React from 'react';

export const Button = ({
  title,
  onClick,
  className = 'bg-lime-400 hover:bg-lime-500 text-black font-medium text-sm py-2 px-5 rounded',
}) => {
  return (
    <button className={className} onClick={onClick}>
      {title}
    </button>
  );
};
