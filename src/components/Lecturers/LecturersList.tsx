import { useGetAllLecturers } from '../../queries/lecturersQueries';
import Loading from '../UI/Loading';
import LecturerCard from './LecturerCard';

function LecturersList() {
  const { allLecturers, isLoading } = useGetAllLecturers();
  return (
    <>
      {isLoading && <Loading />}
      <div className="flex flex-wrap">
        {allLecturers?.map((lecturer) => {
          return (
            <div className=" mb-4 w-full px-4 md:w-1/2">
              <LecturerCard key={lecturer.id} lecturer={lecturer} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default LecturersList;
