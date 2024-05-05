import { useAdmin } from '../../../context/AdminContext';
import AdminToggle from './AdminToggle';
import NavButton from './NavButton';

function Header() {
  const { isAdmin } = useAdmin();

  return (
    <nav className="flex items-center border border-border bg-foreground bg-white py-2 shadow-lg md:gap-4 md:px-4">
      <div className="flex flex-1 md:gap-16 md:pl-6">
        <NavButton
          route="/app/workshops"
          title="Workshops"
          colorize="background"
        />
        <NavButton
          route="/app/lecturers"
          title="Lecturers"
          colorize="background"
        />
        {isAdmin && (
          <NavButton route="/app/admin" title="Admin" colorize="background" />
        )}
      </div>
      <AdminToggle />
    </nav>
  );
}

export default Header;
