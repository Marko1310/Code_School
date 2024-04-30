import { Navigate, Outlet } from 'react-router-dom';
import { useAdmin } from '../../context/AdminContext';

function ProtectedRoute() {
  const { isAdmin } = useAdmin();
  return isAdmin ? <Outlet /> : <Navigate to="/" replace={true} />;
}

export default ProtectedRoute;
