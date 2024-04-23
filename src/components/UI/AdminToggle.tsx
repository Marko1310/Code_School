import Switch from '@mui/material/Switch';
import { useAdmin } from '../../context/AdminContext';

function AdminToggle() {
  const { toggleIsAdmin } = useAdmin()!;

  return (
    <div className="flex items-center rounded-lg border py-2 pr-2 lg:pr-6">
      <Switch color="warning" onClick={toggleIsAdmin} />
      <p>Admin</p>
    </div>
  );
}
export default AdminToggle;
