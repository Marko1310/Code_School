import Switch from '@mui/material/Switch';

function AdminToggle() {
  return (
    <div className="flex items-center rounded-lg border py-2 pr-2 lg:pr-6">
      <Switch color="warning" />
      <p>Admin</p>
    </div>
  );
}
export default AdminToggle;
