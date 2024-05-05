import Loading from '../../../components/UI/Loading';
import LecturerRow from './LecturerRow';
import TableHead from '../../../components/UI/Table/TableHead';
import { useGeFilteredlLecturers } from '../../../queries/lecturersQueries';

function AdminLecturers() {
  const { filteredLecturers, isLoading } = useGeFilteredlLecturers();

  {
    if (isLoading) {
      return <Loading />;
    } else
      return (
        <div className="">
          <div className="grid grid-cols-3 border bg-white">
            <TableHead value="Title" />
            <TableHead value="Organization" />
            <TableHead value="Options" />
            {filteredLecturers?.map((lecturer) => (
              <LecturerRow key={lecturer.id} lecturer={lecturer} />
            ))}
          </div>
        </div>
      );
  }
}

export default AdminLecturers;
