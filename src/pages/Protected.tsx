import { ReactNode, useEffect } from 'react';
import { useAdmin } from '../context/AdminContext';
import { useNavigate } from 'react-router-dom';

function Protected({ children }: { children: ReactNode }) {
  const { isAdmin } = useAdmin();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin) {
      navigate('/app/workshops', { replace: true });
    }
  }, [navigate, isAdmin]);

  return children;
}

export default Protected;
