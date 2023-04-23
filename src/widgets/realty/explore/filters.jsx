import React from 'react';
import { StatusTag } from './filters/tag';
import { Dropdown } from 'shared/ui/dropdown';
import { Input } from 'shared/ui/input';

const statusTags = [
  {
    title: 'Active',
    value: 'active',
    color: 'bg-lime-300',
  },
  {
    title: 'Sold Out',
    value: 'soldOut',
    color: 'bg-yellow-300',
  },
  {
    title: 'Rented',
    value: 'rented',
    color: 'bg-blue-300',
  },
  {
    title: 'Ready',
    value: 'ready',
    color: 'bg-indigo-300',
  },
  {
    title: 'Archived',
    value: 'archived',
    color: 'bg-gray-300',
  },
];

const roomsOptions = [
  {
    title: '1-5',
    value: [1, 5],
  },
  {
    title: '5-10',
    value: [5, 10],
  },
  {
    title: '10-15',
    value: [10, 15],
  },
];

const areaOptions = [
  {
    title: '5-15',
    value: [5, 15],
  },
  {
    title: '15-35',
    value: [15, 35],
  },
  {
    title: '35-55',
    value: [35, 55],
  },
  {
    title: '55+',
    value: [55, 10000],
  },
];

export const Filters = ({ filter, setFilter }) => {
  return (
    <div className="flex flex-col w-full relative">
      <Input
        label={''}
        className={'absolute -top-1 right-0 -translate-y-16'}
        placeholder="Search"
        autoComplete="search"
        value={filter.search}
        onChange={(e) => setFilter({ ...filter, search: e.target.value })}
      />
      <div className="flex justify-start flex-col">
        <div className="flex items-center gap-1">
          {statusTags.map((tag) => (
            <StatusTag
              key={tag.value}
              tag={tag.title}
              color={tag.color}
              value={tag.value}
              checked={filter.status === tag.value}
              onSelect={(value) => setFilter({ ...filter, status: value })}
            />
          ))}
        </div>
        <div className="flex items-center gap-[1px]">
          <Dropdown
            title={filter.rooms?.join('-') || 'Rooms'}
            options={roomsOptions}
            buttonClassName="w-full rounded-b-lg"
            onSelect={(o) => setFilter({ ...filter, rooms: o.value })}
          />
          <Dropdown title="Location" buttonClassName="w-full rounded-b-lg" />
          <Dropdown
            title={filter.area?.join('-') || 'Area'}
            options={areaOptions}
            buttonClassName="w-full rounded-b-lg"
            onSelect={(o) => setFilter({ ...filter, area: o.value })}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};
