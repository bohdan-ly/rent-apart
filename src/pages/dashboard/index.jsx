import { Activity } from 'entities/dashboard/activity';
import { Section } from 'shared/ui/content';
import { RealtyList } from 'widgets/dashboard/realty';

const DashboardPage = () => {
  return (
    <main className="w-full flex flex-col overflow-hidden">
      <Section
        title="My Realty"
        className="px-4"
        titleClassName="text-xl font-bold font-heading md:max-w-xl leading-none"
        content={<RealtyList />}
      />
      <Section
        title="Last Activity"
        titleClassName="text-xl font-bold font-heading md:max-w-xl leading-none"
        content={<Activity />}
      />
    </main>
  );
};

export default DashboardPage;
