import DarkModeToggle from './AdminToggle';
import NavButton from './NavButton';

function Header() {
  return (
    <div className="flex h-20 w-full items-center bg-white lg:gap-4 lg:px-4">
      <div className="flex flex-1 lg:gap-16 lg:pl-6">
        <NavButton route="/app/workshops" title="Workshops" />
        <NavButton route="/app/lecturers" title="Lecturers" />
        <NavButton route="/app/admin" title="Administration" />
      </div>
      <DarkModeToggle />
    </div>
  );
}

export default Header;
