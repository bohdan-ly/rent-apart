import { TopBar } from 'widgets/topbar';
import { SidebarButton } from './button';
import {
  Squares2X2Icon,
  BuildingOffice2Icon,
  HomeIcon,
  PlusSmallIcon,
  PresentationChartLineIcon,
  DocumentPlusIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

const main = [
  {
    title: 'Dashboard',
    icon: <Squares2X2Icon />,
  },
  {
    title: 'Realty',
    icon: <BuildingOffice2Icon />,
  },
];

const secondary = [
  {
    title: 'Add Realty',
    icon: <DocumentPlusIcon />,
  },
  {
    title: 'Statistics',
    icon: <PresentationChartLineIcon />,
  },
  {
    title: 'Advertising',
    icon: <RocketLaunchIcon />,
  },
];

export const Sidebar = () => {
  return (
    <>
      <button
        data-drawer-target="separator-sidebar"
        data-drawer-toggle="separator-sidebar"
        aria-controls="separator-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="separator-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
          <a href="#" className="flex items-center pl-2.5 mb-5">
            <img src="/logo.jpeg" className="h-20 mr-3 sm:h-20" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap">Realty Rift</span>
          </a>
          <ul className="space-y-2 font-medium">
            {main.map((el) => (
              <SidebarButton key={el.title} {...el} />
            ))}
          </ul>
          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200">
            {secondary.map((el) => (
              <SidebarButton key={el.title} {...el} />
            ))}
          </ul>
        </div>
      </aside>
      <div className="bg-red fixed sm:sticky top-0 right-0 w-full">
        <TopBar />
      </div>
    </>
  );
};
