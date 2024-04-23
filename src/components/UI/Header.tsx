import { useAdmin } from '../../context/AdminContext';
import DarkModeToggle from './AdminToggle';
import NavButton from './NavButton';

function Header() {
  const { isAdmin } = useAdmin();

  return (
    <div className="flex h-20 w-full items-center bg-white md:gap-4 md:px-4">
      <div className="flex flex-1 md:gap-16 md:pl-6">
        <NavButton route="/app/workshops" title="Workshops" />
        <NavButton route="/app/lecturers" title="Lecturers" />
        {isAdmin && <NavButton route="/app/admin" title="Administration" />}
      </div>
      <DarkModeToggle />
    </div>
  );
}

export default Header;
