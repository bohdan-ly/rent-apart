import React from 'react';
import { Tag } from 'shared/ui';
import { Input } from 'shared/ui/input';

const tags = [
  {
    title: 'Active',
    value: 'active',
  },
  {
    title: 'Sold Out',
    value: 'soldOut',
  },
  {
    title: 'Rented',
    value: 'rented',
  },
  {
    title: 'Ready',
    value: 'ready',
  },
  {
    title: 'Archived',
    value: 'archived',
  },
];

export const Characteristics = () => {
  return (
    <div className="flex flex-col grid-cols-1">
      <div className="flex flex-wrap gap-4">
        {tags.map((t) => (
          <Tag
            key={t.value}
            tag={t.title}
            labelClassName="cursor-pointer hover:bg-lime-100 transition-all"
          />
        ))}
      </div>
      <div className="space-y-5 mt-6">
        <Input label="name" placeholder="Name" />
        <Input label="Type of realty" placeholder="Type" />
        <Input label="Area" type="number" placeholder={'m²'} />
        <Input label="location" placeholder="Location" />
        {/* <Input label="status" placeholder="Status" /> */}
        <Input label="Rooms" type="number" placeholder={'Rooms'} />
        <Input label="Price" type="number" placeholder={'100$'} />
      </div>
    </div>
  );
};
