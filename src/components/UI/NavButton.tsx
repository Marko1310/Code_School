import { Link, useLocation } from 'react-router-dom';

type NavLinkProps = {
  route: string;
  title: string;
};

function NavButton({ route, title }: NavLinkProps) {
  const location = useLocation().pathname;

  return (
    <Link
      to={route}
      className={`${
        location.startsWith(route) && 'bg-hover-select hover:bg-hover-select'
      } rounded-lg px-2 py-3 transition-all hover:bg-hover lg:px-6`}
    >
      {title}
    </Link>
  );
}

export default NavButton;
