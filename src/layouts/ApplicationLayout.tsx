import { Outlet } from 'react-router-dom';
import Header from '../components/Shared/UI/Header';

function ApplicationLayout() {
  return (
    <div className="bg-background-user h-screen w-screen">
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
