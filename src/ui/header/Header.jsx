import { Icon } from '../icon';

import './Header.scss';

export const Header = () => {
  return (
    <div className='flex items-center py-1'>
      <div className='header__logo'>
        Logo
      </div>
      <div className='header__controls'>
        <a className={'mr-5'} href={'#'}>Help</a>
        {/*There will be notification icon*/}
        <Icon />
      </div>
      <div className='header__avatar'>
        <img className='h-10 w-10 rounded-full' src={'https://flxt.tmsimg.com/assets/1650_v9_ba.jpg'} alt='' />
      </div>
    </div>
  );
};