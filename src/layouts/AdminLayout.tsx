import { Outlet } from 'react-router-dom';

function AdminLayout() {
  return (
    <div className="h-screen w-screen bg-orange-100">
      <Outlet />
    </div>
  );
}

export default AdminLayout;
