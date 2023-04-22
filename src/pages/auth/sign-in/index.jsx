const SignIn = ({ onClickLink }) => {

  const handleSubmit = () => {

  };

  return (
    <form className={'flex flex-col'}>
      <h2 className={'self-center mb-4 text-lg text-white'}>Login</h2>
      <input name={'email'}
             className='p-1 bg-transparent mb-5 rounded-md border-b-2 outline-none border-white text-white text-md placeholder-white'
             type='text'
             placeholder={'Email'} />
      <input name={'password'}
             className='p-1 bg-transparent mb-10 rounded-md border-b-2 outline-none border-white text-white text-md placeholder-white'
             type='text'
             placeholder={'Password'} />
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