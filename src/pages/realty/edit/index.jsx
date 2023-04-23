import { Tenants } from 'entities/realty/tenants';
import React from 'react';
import { Section } from 'shared/ui/content';
import { RealtyEdit } from 'widgets/realty/edit';

const RealtyEditPage = () => {
  return (
    <main className="w-full flex flex-col overflow-hidden px-10">
      <RealtyEdit />

      <Section
        title="Tenants"
        titleClassName="text-xl font-bold font-heading md:max-w-xl leading-none"
        className={'mt-16'}
        content={<Tenants />}
      />
    </main>
  );
};

export default RealtyEditPage;
