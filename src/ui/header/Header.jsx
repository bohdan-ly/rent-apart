import { Icon } from '../icon';

import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBell } from '@fortawesome/free-regular-svg-icons';

export const Header = () => {
  return (
    <div className='header flex items-center py-1'>
      <div className='header__logo'>
        Logo
      </div>
      <div className='ml-auto mr-2'>
        <a className={'mr-5'} href={'#'}>Help</a>
        <FontAwesomeIcon icon={faBell} />
      </div>
      <div className='header__avatar'>
        <img className='h-10 w-10 rounded-full' src={'https://flxt.tmsimg.com/assets/1650_v9_ba.jpg'} alt='' />
      </div>
    </div>
  );
};