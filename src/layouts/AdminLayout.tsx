import { Outlet } from 'react-router-dom';
import NavButton from '../components/UI/NavButton';

function AdminLayout() {
  return (
    <div className="h-screen w-screen bg-orange-100 p-8">
      <nav className="mb-8 flex w-full items-center justify-between bg-white p-2">
        <div className="flex flex-1 md:gap-16 md:pl-6">
          <NavButton
            route="/app/admin/workshops"
            title="Workshops"
            colorize="text"
          />
          <NavButton
            route="/app/admin/lecturers"
            title="Lecturers"
            colorize="text"
          />
          <NavButton
            route="/app/admin/organizations"
            title="Organizations"
            colorize="text"
          />
        </div>
        <div>
          <button className="h-fit rounded-lg border px-6 py-3 transition-all hover:bg-orange-300">
            + Add New
          </button>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default AdminLayout;
