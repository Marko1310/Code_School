import { useGeFilteredlLecturers } from '../../queries/lecturersQueries';
import Loading from '../UI/Loading';
import LecturerCard from './LecturerCard';

function LecturersList() {
  const { allLecturers, isLoading } = useGeFilteredlLecturers();

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap">
          {allLecturers?.map((lecturer) => {
            return (
              <div
                key={lecturer.id}
                className="mb-4 w-full px-4 lg:w-1/2"
                style={{ display: 'flex' }}
              >
                <LecturerCard lecturer={lecturer} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default LecturersList;
