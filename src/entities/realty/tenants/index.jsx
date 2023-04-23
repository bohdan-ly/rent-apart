import React from 'react';
import { Controls, filters } from './controls';
import { Info } from './info';
import { Tenant } from './tenant';

const generalTenants = [
  {
    name: 'Martin',
    email: 'martinking@gmail.com',
  },
  {
    name: 'Martin',
    email: 'martinking@gmail.com',
  },
  {
    name: 'Martin',
    email: 'martinking@gmail.com',
  },
  {
    name: 'Martin',
    email: 'martinking@gmail.com',
  },
];

const payedTenants = [
  {
    name: 'Martin2',
    email: 'martin2king@gmail.com',
    lastPayedAt: Date.now(),
    sum: 550,
    percentilesLeft: 90,
  },
  {
    name: 'Martin2',
    email: 'martin2king@gmail.com',
    lastPayedAt: Date.now(),
    sum: 550,
    percentilesLeft: 90,
  },
  {
    name: 'Martin2',
    email: 'martin2king@gmail.com',
    lastPayedAt: Date.now(),
    sum: 550,
    percentilesLeft: 90,
  },
  {
    name: 'Martin2',
    email: 'martin2king@gmail.com',
    lastPayedAt: Date.now(),
    sum: 550,
    percentilesLeft: 90,
  },
];

export const Tenants = () => {
  const [filter, setFilter] = React.useState(filters[0]);
  const [tenants, setTenants] = React.useState(generalTenants);

  const handleChangeFilter = (filter) => {
    console.log(filter.value);
    switch (filter.value) {
      case 'all':
        setTenants(generalTenants);
        break;
      case 'paid':
        setTenants(payedTenants);
        break;
    }

    setFilter(filter);
  };

  return (
    <div className="w-full">
      <Controls curFilter={filter} setFiler={handleChangeFilter} />
      <Info curFilter={filter} />
      <ul className=" mt-10">
        {tenants.map((a, idx) => (
          <Tenant key={idx} {...a} />
        ))}
      </ul>
    </div>
  );
};