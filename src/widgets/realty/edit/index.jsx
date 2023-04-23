import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Section } from 'shared/ui/content';
import { selectRealtyBySlug } from 'store/realty/selector';
import { Form } from './form';

export const RealtyEdit = () => {
  const { slug } = useParams();
  const realty = useSelector(selectRealtyBySlug(slug));
  return (
    <Section
      title={realty ? 'Edit realty' : 'Create new realty'}
      titleClassName="text-xl font-bold font-heading md:max-w-xl leading-none"
      className="mt-10"
      content={<Form initialData={realty || null} />}
    />
  );
};
