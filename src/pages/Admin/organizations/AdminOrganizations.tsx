import Loading from '../../../components/UI/Loading';
import OrganizationRow from './OrganizationRow';
import TableHead from '../../../components/UI/Table/TableHead';
import { useGetOrganizations } from '../../../queries/organizationQueries';

function AdminOrganizations() {
  const { organizations, isLoading } = useGetOrganizations();

  {
    if (isLoading) {
      return <Loading />;
    } else
      return (
        <div className="">
          <div className="grid grid-cols-3 border bg-white">
            <TableHead value="Title" />
            <TableHead value="Address" />
            <TableHead value="Options" />
            {organizations?.map((organization) => (
              <OrganizationRow
                key={organization.id}
                organization={organization}
              />
            ))}
          </div>
        </div>
      );
  }
}

export default AdminOrganizations;
