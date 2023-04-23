import { Tenants } from 'entities/realty/tenants';
import React from 'react';
import { Section } from 'shared/ui/content';
import { RealtyDetails } from 'widgets/realty/details';

const RealtyDetailsPage = () => {
  return (
    <main className="w-full flex flex-col overflow-hidden px-10">
      <RealtyDetails />

      <Section
        title="Tenants"
        titleClassName="text-xl font-bold font-heading md:max-w-xl leading-none"
        className={'mt-16'}
        content={<Tenants />}
      />
    </main>
  );
};

export default RealtyDetailsPage;
