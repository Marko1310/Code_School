import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex h-full w-full items-center justify-center gap-2">
      <div className="flex h-16 items-center border-r-2 border-gray-400 lg:h-[200px]">
        <h1 className="pr-3 text-4xl font-thin lg:text-[200px]">404</h1>
      </div>
      <div className="flex flex-col">
        <p>This page could not be found!</p>
        <p>
          Go to{' '}
          <Link className="underline" to="/">
            Homepage
          </Link>
        </p>
      </div>
    </div>
  );
}

export default NotFound;
