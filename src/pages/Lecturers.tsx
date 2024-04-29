import LecturersList from '../components/Lecturers/LecturersList';
import WorkshopsLecturersLayout from '../layouts/WorkshopsLecturersLayout';

function Lecturers() {
  return (
    <WorkshopsLecturersLayout>
      <LecturersList />
    </WorkshopsLecturersLayout>
  );
}

export default Lecturers;
