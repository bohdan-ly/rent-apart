import React from 'react';
import { Section } from 'shared/ui/content';
import { RealtyExplore } from 'widgets/realty/explore';

const ExplorePage = () => {
  return (
    <main className="w-full flex flex-col overflow-hidden px-10">
      <Section
        title={'Realty List'}
        titleClassName="text-xl font-bold font-heading md:max-w-xl leading-none"
        className={'mt-16'}
        content={<RealtyExplore />}
      />
    </main>
  );
};

export default ExplorePage;
