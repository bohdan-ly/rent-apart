import { Input } from '../../../shared/ui/input/';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { isEmailValid, isPasswordValid, isUsernameValid } from '../auth.validators.js';
import axios from 'axios';
import { BASE_API } from '../../../constants.js';
import { login } from '../../../store/auth/slice.js';
import { FieldError } from '../../../shared/ui/error-field/index.js';


const SignIn = ({ onClickLink }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] =
    useState({ name: false, password: false, email: false });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const emailValid = isEmailValid(email);
    const passwordValid = isPasswordValid(password);

    setErrors({
      email: !emailValid,
      password: !passwordValid,
    });

    if (emailValid && passwordValid) {
      try {

      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <form className={'flex flex-col'} onSubmit={handleSubmit}>
      <h2 className={'self-center mb-4 text-lg text-white'}>Login</h2>
      <div className='mb-4'>
        <Input name={'email'}
               value={email}
               onChange={({ target }) => setEmail(target.value)}
               placeholder={'Email'} />
        <FieldError isVisible={errors.email} errorMessage={'This is not valid email'} />
      </div>
      <div className='mb-4'>
        <Input name={'password'}
               type={'password'}
               value={password}
               onChange={({ target }) => setPassword(target.value)}
               placeholder={'Password'} />
        <FieldError isVisible={errors.password} errorMessage={'This is not valid password'} />
      </div>
      <button
        className='self-center px-10 py-1 mb-5 bg-pink-600 hover:bg-pink-700 text-white rounded'>
        Login
      </button>
      <span className={'text-white'}>Don’t have account?
        <a className={'ml-1 font-bold'} href='#' onClick={onClickLink}> Create new account</a>
      </span>
    </form>
  );
};

export default SignIn;