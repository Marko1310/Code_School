import { ReactNode, createContext, useContext, useState } from 'react';

type AdminContextType = {
  isAdmin: boolean;
  toggleIsAdmin: () => void;
};

const AdminContext = createContext<AdminContextType | null>(null);

function AdminProvider({ children }: { children: ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false);

  function toggleIsAdmin() {
    setIsAdmin((prevValue: boolean) => !prevValue);
  }

  return (
    <AdminContext.Provider value={{ isAdmin, toggleIsAdmin }}>
      {children}
    </AdminContext.Provider>
  );
}

function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined)
    throw new Error('AdminContext was used outside of AdminProvider');
  return context;
}

export { AdminProvider, useAdmin };
