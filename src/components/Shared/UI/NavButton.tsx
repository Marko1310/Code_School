import { Link, useLocation } from 'react-router-dom';

type NavLinkProps = {
  route: string;
  title: string;
  colorize: 'text' | 'background';
};

function NavButton({ route, title, colorize }: NavLinkProps) {
  const location = useLocation().pathname;

  return (
    <Link
      to={route}
      className={
        colorize === 'text'
          ? `${
              location.startsWith(route) &&
              'text-orange-400 hover:text-orange-300'
            } rounded-lg px-2 py-3 transition-all hover:text-orange-300 lg:px-6`
          : `${
              location.startsWith(route) &&
              'bg-hover-select hover:bg-hover-select'
            } rounded-lg px-2 py-3 transition-all hover:bg-hover lg:px-6`
      }
    >
      {title}
    </Link>
  );
}

export default NavButton;
