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
              'text-admin hover:text-admin-foreground'
            } rounded-lg px-2 py-3 transition-all hover:text-orange-300 lg:px-6`
          : `${
              location.startsWith(route) && 'bg-accent hover:bg-accent'
            } rounded-lg px-2 py-3 transition-all hover:bg-accent lg:px-6`
      }
    >
      {title}
    </Link>
  );
}

export default NavButton;
