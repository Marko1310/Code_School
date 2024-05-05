import Loading from '../../../components/Shared/UI/Loading';
import LecturerRow from '../../../components/Lecturers/LecturerRow';
import TableHead from '../../../components/Shared/UI/Table/TableHead';
import { useGeFilteredlLecturers } from '../../../queries/lecturersQueries';

function AdminLecturers() {
  const { filteredLecturers, isLoading } = useGeFilteredlLecturers();

  {
    if (isLoading) {
      return <Loading />;
    } else
      return (
        <div className="grid grid-cols-3 border border-slate-400 bg-background">
          <TableHead value="Title" />
          <TableHead value="Organization" />
          <TableHead value="Options" />
          {filteredLecturers?.map((lecturer) => (
            <LecturerRow key={lecturer.id} lecturer={lecturer} />
          ))}
        </div>
      );
  }
}

export default AdminLecturers;
