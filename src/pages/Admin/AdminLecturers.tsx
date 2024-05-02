import Loading from '../../components/UI/Loading';
import TableButton from '../../components/UI/Table/TableButton';
import TableData from '../../components/UI/Table/TableData';
import TableHead from '../../components/UI/Table/TableHead';
import { useGetAllLecturers } from '../../queries/lecturersQueries';

function AdminLecturers() {
  const { allLecturers, isLoading } = useGetAllLecturers();

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
                  <TableHead data="Organization" />
                  <TableHead data="Options" />
                </tr>
              </thead>
              <tbody>
                {allLecturers?.map((lecturer) => (
                  <tr
                    key={lecturer.id}
                    className="overflow-hidden bg-white p-4 text-center"
                  >
                    <TableData>{lecturer.name}</TableData>
                    <TableData>{lecturer?.organizations?.name}</TableData>
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

export default AdminLecturers;
