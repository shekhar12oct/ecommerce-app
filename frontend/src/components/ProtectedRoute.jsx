import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  // if user is not logged in, redirect to login page
  if (!user) {
    return <Navigate to='/login' replace />;
  }

  // else render the protected component
  return children;
};

export default ProtectedRoute;
