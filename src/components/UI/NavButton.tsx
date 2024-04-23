import { Link, useLocation } from 'react-router-dom';

type NavLinkProps = {
  route: string;
  title: string;
};

function NavButton({ route, title }: NavLinkProps) {
  const location = useLocation().pathname;
  console.log(location);

  return (
    <Link
      to={route}
      className={`${
        location === route && 'bg-hover-select hover:bg-hover-select'
      } hover:bg-hover rounded-lg px-2 py-3 transition-all lg:px-6`}
    >
      {title}
    </Link>
  );
}
export default NavButton;
