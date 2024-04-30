import { LecturerType } from '../../types/data.types';
import Loading from '../UI/Loading';
import LecturerCard from './LecturerCard';

type lecturersListProps = {
  lecturers: LecturerType[] | null | undefined;
  isLoading: boolean;
};

function LecturersList({ lecturers, isLoading }: lecturersListProps) {
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap">
          {lecturers?.map((lecturer) => {
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
