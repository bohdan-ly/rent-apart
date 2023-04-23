import classNames from 'classnames';
import { RealtyCard } from 'entities/dashboard/realty-card';
import CreateRealty from 'features/dashboard/create-realty';
import { useSelector } from 'react-redux';
import { selectRealty } from 'store/realty/selector';

export const RealtyList = () => {
  const { realties, status } = useSelector(selectRealty);

  return (
    <div className="rounded-lg">
      <div className={classNames('grid gap-4 mb-4', { 'grid-cols-2': !!realties.length })}>
        {realties.map((r, idx) => (
          <RealtyCard key={idx} {...r} />
        ))}
        <CreateRealty />
      </div>
    </div>
  );
};
