import { Outlet } from 'react-router-dom';
import Header from '../components/UI/Header';

function ApplicationLayout() {
  return (
    <div className="h-screen w-screen bg-red-100">
      <div className="flex h-full flex-col">
        <Header />
        <div className="h-full overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default ApplicationLayout;
