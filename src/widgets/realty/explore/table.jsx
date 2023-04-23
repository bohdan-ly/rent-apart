import classNames from 'classnames';
import { RealtyCard } from './realty-card';
import CreateRealty from 'features/dashboard/create-realty';
import { useSelector } from 'react-redux';
import { selectFilteredRealty } from 'store/realty/selector';

export const RealtyList = ({ filter }) => {
  const realties = useSelector(selectFilteredRealty(filter));

  return (
    <div className="rounded-lg mt-10">
      <div
        className={classNames('grid gap-4 mb-4', {
          'grid-cols-2 lg:grid-cols-3': !!realties.length,
        })}
      >
        {realties.map((r, idx) => (
          <RealtyCard key={idx} keyword={filter?.search || ''} {...r} />
        ))}
        <CreateRealty />
      </div>
    </div>
  );
};
