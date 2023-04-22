import classNames from 'classnames';
import { RealtyCard } from 'entities/dashboard/realty-card';
import CreateRealty from 'features/dashboard/create-realty';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectRealty } from 'store/realty/selector';

export const RealtyList = () => {
  const { realties, status } = useSelector(selectRealty);

  return (
    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
      <div className={classNames('grid gap-4 mb-4', { 'grid-cols-2': !!realties.length })}>
        {realties.map((r, idx) => (
          <RealtyCard key={idx} {...r} />
        ))}
        {!realties.length && <CreateRealty />}
      </div>
    </div>
  );
};
