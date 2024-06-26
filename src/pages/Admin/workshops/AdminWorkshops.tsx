import Loading from '../../../components/Shared/UI/Loading';
import { useGetFilteredWorkshops } from '../../../queries/workshopsQueries';
import WorkshopRow from '../../../components/Workshops/WorkshopRow';
import TableHead from '../../../components/Shared/UI/Table/TableHead';

function AdminWorkshops() {
  const { filteredWorkshops, isLoading } = useGetFilteredWorkshops();

  {
    if (isLoading) {
      return <Loading />;
    } else
      return (
        <div className="grid grid-cols-3 border border-border bg-foreground">
          <TableHead value="Title" />
          <TableHead value="Attendees" />
          <TableHead value="Options" />
          {filteredWorkshops?.map((workshop) => (
            <WorkshopRow key={workshop.id} workshop={workshop} />
          ))}
        </div>
      );
  }
}

export default AdminWorkshops;
