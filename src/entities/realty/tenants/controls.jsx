import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'shared/ui/button';
import { Dropdown } from 'shared/ui/dropdown';
import { openPopup } from 'store/popup/slice';
import { TenantPopup } from 'widgets/realty/tenant';

export const filters = [
  {
    title: 'All',
    value: 'all',
  },
  {
    title: 'Paid for',
    value: 'paid',
  },
];

export const Controls = ({ curFilter = {}, setFiler = () => {} }) => {
  const dispatch = useDispatch();

  const openNewTenantPopup = () => {
    dispatch(openPopup(<TenantPopup />));
  };

  return (
    <div className="w-full flex items-center justify-between">
      <div className="w-fit">
        <Dropdown
          title={
            <p className="text-nowrap mr-1 capitalize flex flex-nowrap">
              <span className="text-gray-400 mr-3">Show:</span>{' '}
              <span className="text-nowrap">{curFilter.title}</span>
            </p>
          }
          options={filters}
          onSelect={setFiler}
        />
      </div>
      <div>
        <Button title={'+ Add tenant'} onClick={openNewTenantPopup} />
      </div>
    </div>
  );
};
