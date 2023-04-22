import { useState } from 'react';
import { login } from '../../../store/auth/auth.slice.js';
import { useDispatch } from 'react-redux';
import { isEmailValid, isPasswordValid, isUsernameValid } from '../auth.validators.js';
import axios from 'axios';
import { BASE_URL } from '../../../constants.js';


const SignUp = ({ onClickLink }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [match, setMatch] = useState(true);

  const [errors, setErrors] = useState({ name: false, password: false, email: false });


  const validateFormFields = () => {
    if (!isUsernameValid(name)) {
      setErrors(({ ...errors, name: true }));
    } else {
      setErrors({ ...errors, name: false });
    }

    if (!isEmailValid(email)) {
      setErrors({ ...errors, email: true });
    } else {
      setErrors({ ...errors, email: false });
    }

    if (!isPasswordValid(password)) {
      setErrors({ ...errors, password: true });
    } else {
      setErrors({ ...errors, password: false });
    }

  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setMatch(false);
    }

    validateFormFields();

    try {

      const { ...user } = {
        id: Date.now().toFixed(2).toString(),
        name,
        email,
        password,
      };

      axios.post(BASE_URL, {});

      dispatch(login({ user }));

    } catch (e) {

    }

  };


  return (
    <form className={'flex flex-col'} onSubmit={handleSubmit}>
      <h2 className={'self-center mb-4 text-lg text-white'}>Registration</h2>
      <input name={'Name'}
             className='p-1 bg-transparent mb-5 rounded-md border-b-2 outline-none border-white text-white text-md placeholder-white'
             type='text'
             value={username}
             onChange={({ target }) => setUsername(target.value)}
             placeholder={'Name'} />
      {errors.name && <span className={'text-red-500'}>This is not valid username</span>}
      <input name={'email'}
             className='p-1 bg-transparent mb-5 rounded-md border-b-2 outline-none border-white text-white text-md placeholder-white'
             type='text'
             value={email}
             onChange={({ target }) => setEmail(target.value)}
             placeholder={'Email'} />
      {errors.email && <span className='text-red-500'>This is not valid email</span>}
      <input name={'password'}
             className='p-1 bg-transparent mb-5 rounded-md border-b-2 outline-none border-white text-white text-md placeholder-white'
             type='password'
             value={password}
             onChange={({ target }) => setPassword(target.value)}
             placeholder={'Password'} />
      {errors.password && <span className={'text-red-500'}>This is not valid password</span>}
      <input name={'confirmPassword'}
             className='p-1 bg-transparent mb-5 rounded-md border-b-2 outline-none border-white text-white text-md placeholder-white'
             type='password'
             value={confirmPassword}
             onChange={({ target }) => setConfirmPassword(target.value)}
             placeholder={'Confirm password'} />
      {match === false && <span className='text-red-500 mb-5'>Password is not matched</span>}
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