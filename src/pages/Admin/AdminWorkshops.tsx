import Loading from '../../components/UI/Loading';
import TableData from '../../components/UI/TableData';
import TableHead from '../../components/UI/TableHead';
import { useGetAllWorkshops } from '../../queries/workshopsQueries';

function AdminWorkshops() {
  const { allWorkshops, isLoading } = useGetAllWorkshops();

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
                  <TableHead data="Workshop Name" />
                  <TableHead data="Attendees" />
                  <TableHead data="Options" />
                </tr>
              </thead>
              <tbody>
                {allWorkshops?.map((workshop) => (
                  <tr
                    key={workshop.id}
                    className="overflow-hidden bg-white p-4 text-center"
                  >
                    <TableData>{workshop.name}</TableData>
                    <TableData>{workshop.attendees}</TableData>
                    <TableData>
                      <button className="mr-1 rounded-md bg-green-400 px-3 py-1">
                        Edit
                      </button>
                      <button className="ml-1 rounded-md bg-red-400 px-3 py-1">
                        Delete
                      </button>
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

export default AdminWorkshops;
