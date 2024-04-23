import { ReactNode } from 'react';
import { useAdmin } from '../context/AdminContext';
import { Navigate } from 'react-router-dom';

function Protected({ children }: { children: ReactNode }) {
  const { isAdmin } = useAdmin()!;

  if (!isAdmin) {
    return <Navigate to={'/app/workshops'} />;
  } else {
    return <>{children}</>;
  }
}

export default Protected;
