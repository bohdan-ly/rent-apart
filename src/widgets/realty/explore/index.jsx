import React from 'react';
import { Filters } from './filters';
import { RealtyList } from './table';

export const RealtyExplore = () => {
  const [filter, setFilter] = React.useState({});

  return (
    <div>
      <Filters filter={filter} setFilter={setFilter} />
      <RealtyList filter={filter} />
    </div>
  );
};
