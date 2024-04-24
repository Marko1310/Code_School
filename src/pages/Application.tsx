import { Outlet } from 'react-router-dom';
import Header from '../components/UI/Header';
import supabase from '../config/supabaseClient';

function Application() {
  console.log(supabase);
  // console.log(process.env);

  return (
    <div className="h-screen w-screen bg-red-100">
      <div className="flex h-full flex-col">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default Application;
