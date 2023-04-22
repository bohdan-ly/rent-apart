import SignUp from './sign-up/index.jsx';
import SignIn from './sign-in/index.jsx';

import './Auth.scss';
import { useState } from 'react';

const AuthPage = () => {
  const [modalType, setModalType] = useState('sign-in');

  const openSignIn = () => setModalType('sign-up');
  const openSignUp = () => setModalType('sign-in');

  return (
    <div className={'auth-page h-screen w-full flex bg-gray-100 items-center justify-center'}>
      <div className='p-12 inset-0 bg-black bg-opacity-50 rounded-lg'>
        {modalType === 'sign-in'
          ? <SignIn onClickLink={openSignIn} />
          : <SignUp onClickLink={openSignUp} />}
      </div>
    </div>
  );
};

export default AuthPage;