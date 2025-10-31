import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, clearError } from '../redux/authSlice';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    // Clear any old errors when user visits login page
    dispatch(clearError());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password })).then((res) => {
      if (res.meta.requestStatus === 'fulfilled') {
        navigate('/');
      }
    });
  };

  return (
  <div className='min-h-screen flex items-center justify-center bg-linear-to-b from-white to-sky-50 p-6'>
      <div className='w-full max-w-3xl bg-white shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2'>
        {/* Left artwork / welcome */}
        <div className='hidden md:flex flex-col items-center justify-center bg-sky-600 text-white p-8 space-y-6'>
          <h3 className='text-3xl font-bold'>Welcome back</h3>
          <p className='text-sm opacity-90 text-center'>Sign in to access your account and continue shopping.</p>
          <div className='w-40 h-40 bg-white/10 rounded-full flex items-center justify-center'>
            <svg width='56' height='56' viewBox='0 0 24 24' fill='none' className='text-white' xmlns='http://www.w3.org/2000/svg'>
              <path d='M12 2L15 8H9L12 2Z' fill='currentColor'/>
              <path d='M12 22L9 16H15L12 22Z' fill='currentColor' opacity='0.9'/>
            </svg>
          </div>
        </div>

        {/* Right: form */}
        <div className='p-8 md:p-10'>
          <h2 className='text-2xl font-semibold text-slate-700 mb-4'>Sign in to your account</h2>
          <p className='text-sm text-slate-500 mb-6'>Enter your email and password to continue.</p>
          {error && <div className='mb-4 p-3 bg-red-50 text-red-700 rounded'>{error}</div>}

          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-slate-600 mb-1'>Email</label>
              <input
                id='email'
                type='email'
                className='w-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-300 p-3 rounded-md transition'
                placeholder='you@example.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete='email'
              />
            </div>

            <div>
              <label htmlFor='password' className='block text-sm font-medium text-slate-600 mb-1'>
                Password
              </label>
              <div className='relative'>
                <input
                  id='password'
                  type={showPassword ? 'text' : 'password'}
                  className='w-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-300 p-3 rounded-md pr-12 transition'
                  placeholder='Your password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete='current-password'
                />
                <button
                  type='button'
                  onClick={() => setShowPassword((s) => !s)}
                  className='absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700'
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                      <path d='M4.03 3.97a.75.75 0 10-1.06 1.06l1.06-1.06z' fill='none' />
                      <path d='M10 4.5c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7 3.134-7 7-7z' opacity='0.1'/>
                      <path d='M3.98 6.22C2.78 7.66 2 9.28 2 10c0 .72.78 2.34 1.98 3.78A11.952 11.952 0 0010 17.5c3.866 0 7-3.134 7-7 0-.72-.78-2.34-1.98-3.78' />
                    </svg>
                  ) : (
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                      <path d='M2.94 6.94a10 10 0 0114.12 6.12A10 10 0 012.94 6.94z' opacity='0.1'/>
                      <path d='M10 4.5c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7 3.134-7 7-7z' />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <button
              type='submit'
              disabled={loading}
              className='w-full bg-sky-600 text-white py-3 rounded-md hover:bg-sky-700 disabled:opacity-60 transition'
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>

          <div className='mt-6'>
            <p className='text-center text-sm text-slate-500 mt-6'>
              Don't have an account?{' '}
              <Link to='/register' className='text-sky-600 font-medium hover:underline'>Create one</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
