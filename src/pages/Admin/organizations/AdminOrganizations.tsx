import Loading from '../../../components/Shared/UI/Loading';
import OrganizationRow from '../../../components/Organizations/OrganizationRow';
import TableHead from '../../../components/Shared/UI/Table/TableHead';
import { useGetOrganizations } from '../../../queries/organizationQueries';

function AdminOrganizations() {
  const { organizations, isLoading } = useGetOrganizations();

  {
    if (isLoading) {
      return <Loading />;
    } else
      return (
        <div className="grid grid-cols-3 border border-slate-400  bg-background">
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
      );
  }
}

export default AdminOrganizations;
