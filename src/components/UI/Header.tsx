import { useAdmin } from '../../context/AdminContext';
import AdminToggle from './AdminToggle';
import NavButton from './NavButton';

function Header() {
  const { isAdmin } = useAdmin();

  return (
    <div className="border-border bg-foreground flex h-20 w-full items-center border bg-white shadow-lg  md:gap-4 md:px-4">
      <div className="flex flex-1 md:gap-16 md:pl-6">
        <NavButton route="/app/workshops" title="Workshops" />
        <NavButton route="/app/lecturers" title="Lecturers" />
        {isAdmin && <NavButton route="/app/admin" title="Administration" />}
      </div>
      <AdminToggle />
    </div>
  );
}

export default Header;
