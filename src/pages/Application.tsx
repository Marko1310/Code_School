import { Outlet } from 'react-router-dom';
import Header from '../components/UI/Header';

function Application() {
  return (
    <div className="h-screen w-screen bg-red-100">
      <div className="flex h-full flex-col">
        <Header />
        <div className="overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Application;
