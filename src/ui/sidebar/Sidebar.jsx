import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faPlusSquare } from '@fortawesome/free-regular-svg-icons';

import './Sidebar.scss';
import { Link } from 'react-router-dom';


export const Sidebar = () => {
  return (
    <div className='sidebar w-64 bg-gradient-to-r from-purple-400 to-blue-500'>
      <SidebarItem icon={faBell} linkPath={'#'} linkText={'Dashboard'} />
      <SidebarItem icon={faPlusSquare} linkPath={'#'} linkText={'Added products'} />
      <SidebarItem icon={faBell} linkPath={'#'} linkText={'Sidebard'} />
      <SidebarItem icon={faBell} linkPath={'#'} linkText={'Dashboard'} />
    </div>
  );
};

const SidebarItem = ({ icon, linkPath = '#', linkText }) => {
  return (
    <div className='hover:bg-gradient-to-r from-purple-500 to-blue-600 flex p-2 relative top-0 left-0 items-center'>
      <FontAwesomeIcon icon={icon} />
      <Link className='absolute w-full top-50 left-50 pl-10' to={linkPath}>{linkText}</Link>
    </div>
  );
};