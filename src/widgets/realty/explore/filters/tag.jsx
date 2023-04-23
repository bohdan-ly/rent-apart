import React from 'react';
import { Tag } from 'shared/ui';

export const StatusTag = ({
  tag,
  value,
  checked = false,
  color = 'bg-lime-300',
  onSelect = () => {},
}) => {
  return (
    <Tag
      tag={tag}
      value={value}
      checked={checked}
      onClick={onSelect}
      checkedClassName="drop-shadow-lg outline outline-1 outline-lime-400"
      className={`rounded-t-lg ${color} px-3 py-2 text-xs  outline-lime-600 hover:outline hover:outline-1 cursor-pointer`}
    />
  );
};
