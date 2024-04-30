import Loading from '../../components/UI/Loading';
import TableButton from '../../components/UI/TableButton';
import TableData from '../../components/UI/TableData';
import TableHead from '../../components/UI/TableHead';
import { useGetOrganizations } from '../../queries/organizationQueries';

function AdminOrganizations() {
  const { organizations, isLoading } = useGetOrganizations();

  {
    if (isLoading) {
      return <Loading />;
    } else
      return (
        <div className="relative flex h-full">
          <div className="flex flex-col">
            <table className="w-full table-fixed">
              <thead className=" bg-gray-50 uppercase">
                <tr>
                  <TableHead data="Name" />
                  <TableHead data="Adress" />
                  <TableHead data="Options" />
                </tr>
              </thead>
              <tbody>
                {organizations?.map((organization) => (
                  <tr
                    key={organization.id}
                    className="overflow-hidden bg-white p-4 text-center"
                  >
                    <TableData>{organization.name}</TableData>
                    <TableData>{organization.address}</TableData>
                    <TableData>
                      <TableButton value="Edit" color="green" />
                      <TableButton value="Delete" color="red" />
                    </TableData>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
  }
}

export default AdminOrganizations;
