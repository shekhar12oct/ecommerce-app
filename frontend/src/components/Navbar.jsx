import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav className='bg-white shadow-md py-3'>
      <div className='container mx-auto flex justify-between items-center px-4'>
        {/* Brand Logo */}
        <Link to='/' className='text-2xl font-bold text-blue-600'>
          E-Shop
        </Link>

        {/* Right Section */}
        <div className='flex items-center gap-6'>
          {/* Cart Link */}
          <Link
            to='/cart'
            className='flex items-center gap-2 hover:text-blue-600'
          >
            <FaShoppingCart /> Cart
          </Link>

          {/* Conditional Rendering: Login / Logout */}
          {user ? (
            <button
              onClick={handleLogout}
              className='flex items-center gap-2 hover:text-red-600 cursor-pointer'
            >
              <FaUser /> Logout ({user.name})
            </button>
          ) : (
            <Link
              to='/login'
              className='flex items-center gap-2 hover:text-blue-600 cursor-pointer'
            >
              <FaUser /> Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
