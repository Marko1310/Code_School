import { Outlet } from 'react-router-dom';
import Header from '../components/UI/Header';

function Application() {
  return (
    <div className="h-screen w-screen overflow-y-auto bg-red-100">
      <div className="flex h-full flex-col">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default Application;
