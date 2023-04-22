import { useState } from 'react';

import { login } from '../../../store/auth/slice.js';
import { useDispatch } from 'react-redux';
import { isEmailValid, isPasswordValid, isUsernameValid } from '../auth.validators.js';
import { Input } from '../../../shared/ui/input';
import { FieldError } from '../../../shared/ui/error-field';
import { Api } from '../../../app/model/api.js';

const SignUp = ({ onClickLink }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [passwordConfirm, setConfirmPassword] = useState('');
  const [match, setMatch] = useState(true);

  const [errors, setErrors] =
    useState({ name: false, password: false, email: false });


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== passwordConfirm) {
      setMatch(false);
      return;
    }

    setMatch(true);

    const nameValid = isUsernameValid(name);
    const emailValid = isEmailValid(email);
    const passwordValid = isPasswordValid(password);

    setErrors({
      name: !nameValid,
      email: !emailValid,
      password: !passwordValid,
    });

    if (nameValid && emailValid && passwordValid) {
      try {
        const { user } = await Api.Auth.signUp({ name, email, password, passwordConfirm });

        dispatch(login({ user }));
      } catch (error) {
        console.error(error);
      }
    }
  };


  return (
    <form className={'flex flex-col'} onSubmit={handleSubmit}>
      <h2 className={'self-center mb-4 text-lg text-white'}>Registration</h2>
      <div className='mb-4'>
        <Input name={'name'} value={name} onChange={({ target }) => {
          setName(target.value);
        }} placeholder={'Name'} />
        <FieldError isVisible={errors.name} errorMessage={'This is not valid name'} />
      </div>
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
      <div className='mb-4'>
        <Input name={'passwordConfirm'}
               type='password'
               value={passwordConfirm}
               onChange={({ target }) => setConfirmPassword(target.value)}
               placeholder={'Confirm password'} />
        <FieldError isVisible={!match} errorMessage={'Password is not matched'} />
      </div>
      <button
        className='self-center px-10 py-1 mb-5 bg-pink-600 hover:bg-pink-700 text-white  rounded'>
        Create Account
      </button>
      <span className={'text-white'}>Already have an account?
        <a className='ml-1 font-bold' href='#' onClick={onClickLink}>Login</a>
      </span>
    </form>
  );
};

export default SignUp;