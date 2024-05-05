import Loading from '../../../components/UI/Loading';
import { useGetFilteredWorkshops } from '../../../queries/workshopsQueries';
import WorkshopRow from './WorkshopRow';
import TableHead from '../../../components/UI/Table/TableHead';

function AdminWorkshops() {
  const { filteredWorkshops, isLoading } = useGetFilteredWorkshops();

  {
    if (isLoading) {
      return <Loading />;
    } else
      return (
        <div className="">
          <div className="grid grid-cols-3 border bg-white">
            <TableHead value="Title" />
            <TableHead value="Attendees" />
            <TableHead value="Options" />
            {filteredWorkshops?.map((workshop) => (
              <WorkshopRow key={workshop.id} workshop={workshop} />
            ))}
          </div>
        </div>
      );
  }
}

export default AdminWorkshops;
