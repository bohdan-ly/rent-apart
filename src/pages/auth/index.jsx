import { Api } from 'app/model/api';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from 'store/user/slice';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [state, setState] = React.useState({
    email: '',
    password: '',
  });

  const handleLogin = async () => {
    const res = await Api.Auth.login(state);

    if (res.token) {
      const userRes = await Api.Auth.getUser({ token: res.token });

      if (userRes.user) {
        await dispatch(setUser(userRes.user));
        window.fetchNecessaryData();
        navigate('/dashboard');
      }
    }
    console.log(res);
  };

  return (
    <main className="w-full flex flex-col overflow-hidden">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-[160px] w-auto" src="/logo.png" alt="Your Company" />
          <h1 className="-translate-y-4 italic text-center text-2xl leading-9 tracking-tight text-lime-600">
            Realty Rift
          </h1>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={state.email}
                  onChange={(e) => setState({ ...state, email: e.target.value })}
                  className="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-lime-600 hover:text-lime-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={state.password}
                  onChange={(e) => setState({ ...state, password: e.target.value })}
                  className="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-lime-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate('/signup');
              }}
              className="ml-2 font-semibold leading-6 text-lime-600 hover:text-lime-500"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
